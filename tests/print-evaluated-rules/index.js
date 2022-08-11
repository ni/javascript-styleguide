const { ESLint } = require('eslint');
const angularExtraRules = require('@angular-eslint/eslint-plugin/dist/configs/recommended--extra.json').rules;
const angularRules = require('@ni/eslint-config-angular').rules;
const angularTemplateRules = require('@ni/eslint-config-angular/template').rules;
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

(async () => {
    const argv = yargs(hideBin(process.argv))
        .option('audit', { default: true, type: 'boolean' })
        .option('diff', { default: false, description: 'diff the evaluated rules with old rules from rules.txt', type: 'boolean' })
        .option('no-audit', { description: 'return the evaluated rules only', type: 'boolean' })
        .scriptName('')
        .wrap(null)
        .argv;

    const hasWarn = function (config) {
        return JSON.stringify(config).indexOf('"warn"') !== -1;
    };

    const eslint = new ESLint();
    const configEslint = await eslint.calculateConfigForFile(require.resolve('@ni/javascript-test/index.js'));
    const configTypescript = await eslint.calculateConfigForFile(require.resolve('@ni/typescript-test/index.ts'));
    const configTypescriptTypechecked = await eslint.calculateConfigForFile(require.resolve('@ni/typescript-requiring-type-checking-test/index.ts'));
    const configAngular = await eslint.calculateConfigForFile(require.resolve('@ni/angular-test/index.ts'));
    const configAngularTemplate = await eslint.calculateConfigForFile(require.resolve('@ni/angular-test/index.html'));

    const getRules = function () {
        return {
            ...configEslint.rules,
            ...configTypescript.rules,
            ...configTypescriptTypechecked.rules,
            ...configAngular.rules,
            ...configAngularTemplate.rules
        };
    };

    if (argv.diff) {
        const logs = [];
        const old = JSON.parse(fs.readFileSync('../../rules.txt', 'utf8'));
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
            fs.writeFileSync('../../rules-diff.txt', logs.join(''));
            global.console.log(logs.join(''));
        } else {
            global.console.log('There were no changes.');
        }

        return;
    }

    if (!argv.audit) {
        const json = JSON.stringify(getRules(), null, 4);
        fs.writeFileSync('../../rules.txt', json);
        global.console.log(json);
        return;
    }

    const getDivergedRules = rules => (
        Object.keys(rules)
            .filter(key => !key.startsWith('@angular-eslint'))
            .filter(key => !configTypescript.rules[key] && !configTypescriptTypechecked.rules[key])
            .reduce((config, key) => {
                config[key] = rules[key];
                return config;
            }, {})
    );
    const angularDivergedRules = Object.assign(getDivergedRules(angularRules), getDivergedRules(angularExtraRules));
    const angularTemplateDivergedRules = getDivergedRules(angularTemplateRules);
    const angularHasDivergedRules = !!Object.keys(angularDivergedRules).length || !!Object.keys(angularTemplateDivergedRules).length;

    global.console.log('-------- Audits:');
    global.console.log(`Evaluated ESLint rules has warn?: ${hasWarn(configEslint)}`);
    global.console.log(`Evaluated TypeScript rules has warn?: ${hasWarn(configTypescript)}`);
    global.console.log(`Evaluated TypeScript type checking rules has warn?: ${hasWarn(configTypescriptTypechecked)}`);
    global.console.log(`Evaluated Angular rules has warn?: ${hasWarn(configAngular)}`);
    global.console.log(`Evaluated Angular Template rules has warn?: ${hasWarn(configAngularTemplate)}`);
    global.console.log(`Angular has diverged rules?: ${angularHasDivergedRules}`);
})();
