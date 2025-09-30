import { ESLint } from 'eslint';
import { angularTypescriptConfig, angularTemplateConfig } from '@ni/eslint-config-angular';
import fs from 'fs';
import path from 'path';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    const argv = yargs(hideBin(process.argv))
        .option('audit', { default: true, type: 'boolean' })
        .option('diff', {
            default: false,
            description: 'diff the evaluated rules with old rules from rules.txt',
            type: 'boolean',
        })
        .option('no-audit', {
            description: 'return the evaluated rules only',
            type: 'boolean',
        })
        .scriptName('')
        .wrap(null).argv;

    const hasWarn = function (config) {
        return JSON.stringify(normalizeRulesSeverityToString(config.rules)).indexOf('"warn"') !== -1;
    };

    const testDir = path.resolve(__dirname, '..');
    const jsPath = path.join(testDir, 'javascript', 'index.js');
    const tsPath = path.join(testDir, 'typescript', 'index.ts');
    const angularTsPath = path.join(testDir, 'angular', 'index.ts');
    const angularHtmlPath = path.join(testDir, 'angular', 'index.html');

    const configEslint = await calculateConfigForFile(jsPath);
    const configTypescript = await calculateConfigForFile(tsPath);
    const configAngular = await calculateConfigForFile(angularTsPath);
    const configAngularTemplate = await calculateConfigForFile(angularHtmlPath);

    const getRules = function () {
        return {
            ...normalizeRulesSeverityToString(configEslint.rules),
            ...normalizeRulesSeverityToString(configTypescript.rules),
            ...normalizeRulesSeverityToString(configAngular.rules),
            ...normalizeRulesSeverityToString(configAngularTemplate.rules)
        };
    };

    const dir = path.resolve(__dirname, 'results');
    if (argv.diff) {
        const logs = [];
        const old = JSON.parse(fs.readFileSync(path.join(dir, 'rules.txt'), 'utf8'));
        Object.entries(getRules()).forEach(([key, value]) => {
            if (old[key]) {
                if (JSON.stringify(value) !== JSON.stringify(old[key])
                    && (value[0] !== old[key][0] || value[0] !== 'off')) {
                    logs.push(`${key}:\n\told: ${JSON.stringify(old[key])}\n\tnew: ${JSON.stringify(value)}\n\n`);
                }

                // eslint-disable-next-line no-restricted-syntax
                delete old[key];
                return;
            }

            logs.push(`${key} is new:\n\tnew: ${JSON.stringify(value)}\n\n`);
        });

        Object.entries(old).forEach(([key, value]) => logs.push(`${key} was removed:\n\told: ${JSON.stringify(value)}\n\n`));

        if (logs.length) {
            fs.writeFileSync(path.join(dir, 'rules-diff.txt'), logs.join(''));
            console.log(logs.join(''));
        } else {
            console.log('There were no changes.');
        }

        return;
    }

    if (!argv.audit) {
        const json = JSON.stringify(getRules(), null, 4);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.writeFileSync(path.join(dir, 'rules.txt'), json);
        console.log(json);
        return;
    }

    const getDivergedRules = rules => (Object.keys(rules)
        .filter(key => !key.startsWith('@angular-eslint'))
        .filter(
            key => !configTypescript.rules[key]
        )
        .reduce((config, key) => {
            config[key] = rules[key];
            return config;
        }, {}));

    const angularDivergedRules = getDivergedRules(Object.assign({}, ...angularTypescriptConfig.slice(-2).map(item => item.rules)));
    const angularTemplateDivergedRules = getDivergedRules(Object.assign({}, ...angularTemplateConfig.slice(-2).map(item => item.rules)));
    const angularHasDivergedRules = !!Object.keys(angularDivergedRules).length
        || !!Object.keys(angularTemplateDivergedRules).length;

    console.log('-------- Audits:');
    console.log(`Evaluated ESLint rules has warn?: ${hasWarn(configEslint)}`);
    console.log(
        `Evaluated TypeScript rules has warn?: ${hasWarn(configTypescript)}`
    );
    console.log(`Evaluated Angular rules has warn?: ${hasWarn(configAngular)}`);
    console.log(
        `Evaluated Angular Template rules has warn?: ${hasWarn(
            configAngularTemplate
        )}`
    );
    console.log(`Angular has diverged rules?: ${angularHasDivergedRules}`);
})();

async function calculateConfigForFile(filePath) {
    const eslint = new ESLint({
        cwd: path.resolve(filePath, '..')
    });

    return await eslint.calculateConfigForFile(filePath);
}

function normalizeSeverityToString(val) {
    switch (val) {
        case 0:
            return 'off';
        case 1:
            return 'warn';
        case 2:
            return 'error';
        default:
            return val;
    }
}

function normalizeRulesSeverityToString(rulesObj) {
    const updatedRules = {};
    for (const ruleName in rulesObj) {
        if (Object.prototype.hasOwnProperty.call(rulesObj, ruleName)) {
            const ruleVal = rulesObj[ruleName];
            if (Array.isArray(ruleVal)) {
                updatedRules[ruleName] = [normalizeSeverityToString(ruleVal[0]), ...ruleVal.slice(1)];
            } else {
                updatedRules[ruleName] = normalizeSeverityToString(ruleVal);
            }
        }
    }
    return updatedRules;
}
