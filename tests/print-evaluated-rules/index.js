const { ESLint } = require('eslint');
const angularExtraRules = require('@angular-eslint/eslint-plugin/dist/configs/recommended--extra.json').rules;
const angularRules = require('@ni/eslint-config-angular').rules;
const angularTemplateRules = require('@ni/eslint-config-angular/template').rules;

(async () => {
    const hasWarn = function (config) {
        return JSON.stringify(config).indexOf('"warn"') !== -1;
    };

    const eslint = new ESLint();
    const configEslint = await eslint.calculateConfigForFile(`${__dirname}/../javascript/index.js`);
    const configTypescript = await eslint.calculateConfigForFile(`${__dirname}/../typescript/index.ts`);
    const configTypescriptTypechecked = await eslint.calculateConfigForFile(`${__dirname}/../typescript-requiring-type-checking/index.ts`);
    const configAngular = await eslint.calculateConfigForFile(`${__dirname}/../angular/index.ts`);
    const configAngularTemplate = await eslint.calculateConfigForFile(`${__dirname}/../angular/index.html`);

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
