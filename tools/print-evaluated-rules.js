const { ESLint } = require('eslint');

(async () => {
    const hasWarn = function (config) {
        return JSON.stringify(config).indexOf('"warn"') !== -1;
    };

    const eslint = new ESLint();
    const configEslint = await eslint.calculateConfigForFile(`${__dirname}/../test/eslint/index.js`);
    const configTypescript = await eslint.calculateConfigForFile(`${__dirname}/../test/typescript/index.js`);
    const configTypescriptTypechecked = await eslint.calculateConfigForFile(`${__dirname}/../test/typescript-type-checking/index.js`);

    global.console.log('-------- Evaluated rules:');
    global.console.log('Evaluated eslint rules:');
    global.console.log(JSON.stringify(configEslint, undefined, 4));
    global.console.log('Evaluated TypeScript rules:');
    global.console.log(JSON.stringify(configTypescript, undefined, 4));
    global.console.log('Evaluated TypeScript type checking rules:');
    global.console.log(JSON.stringify(configTypescriptTypechecked, undefined, 4));

    global.console.log('-------- Audits:');
    global.console.log(`Evaluated eslint rules has warn?: ${hasWarn(configEslint)}`);
    global.console.log(`Evaluated TypeScript rules has warn?: ${hasWarn(configTypescript)}`);
    global.console.log(`Evaluated TypeScript type checking rules has warn?: ${hasWarn(configTypescriptTypechecked)}`);
})();
