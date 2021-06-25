const { ESLint } = require('eslint');
const angularExtraRules = require('@angular-eslint/eslint-plugin/dist/configs/recommended--extra.json').rules;
const angularRules = require('../angular').rules;
const angularTemplateRules = require('../angular-template').rules;

(async () => {
    const hasWarn = function (config) {
        return JSON.stringify(config).indexOf('"warn"') !== -1;
    };

    const eslint = new ESLint();
    const configEslint = await eslint.calculateConfigForFile(`${__dirname}/../test/eslint/index.js`);
    const configTypescript = await eslint.calculateConfigForFile(`${__dirname}/../test/typescript/index.js`);
    const configTypescriptTypechecked = await eslint.calculateConfigForFile(`${__dirname}/../test/typescript-type-checking/index.js`);
    const configAngular = await eslint.calculateConfigForFile(`${__dirname}/../test/angular/index.ts`);

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

    global.console.log('-------- Evaluated rules:');
    global.console.log('Evaluated ESLint rules:');
    global.console.log(JSON.stringify(configEslint, undefined, 4));
    global.console.log('Evaluated TypeScript rules:');
    global.console.log(JSON.stringify(configTypescript, undefined, 4));
    global.console.log('Evaluated TypeScript type checking rules:');
    global.console.log(JSON.stringify(configTypescriptTypechecked, undefined, 4));
    global.console.log('Evaluated Angular rules:');
    global.console.log(JSON.stringify(configAngular, undefined, 4));
    global.console.log('Evaluated diverged Angular rules:');
    global.console.log(JSON.stringify(angularDivergedRules, undefined, 4));
    global.console.log('Evaluated diverged Angular template rules:');
    global.console.log(JSON.stringify(angularTemplateDivergedRules, undefined, 4));

    global.console.log('-------- Audits:');
    global.console.log(`Evaluated ESLint rules has warn?: ${hasWarn(configEslint)}`);
    global.console.log(`Evaluated TypeScript rules has warn?: ${hasWarn(configTypescript)}`);
    global.console.log(`Evaluated TypeScript type checking rules has warn?: ${hasWarn(configTypescriptTypechecked)}`);
    global.console.log(`Evaluated Angular rules has warn?: ${hasWarn(configAngular)}`);
    global.console.log(`Angular has diverged rules?: ${angularHasDivergedRules}`);
})();
