const { ESLint } = require('eslint');

(async () => {
    const hasWarn = function (config) {
        return JSON.stringify(config).indexOf('"warn"') !== -1;
    };

    const eslint = new ESLint();
    const configEslint = await eslint.calculateConfigForFile(`${__dirname}/../test/eslint/index.js`);
    const configTypescript = await eslint.calculateConfigForFile(`${__dirname}/../test/typescript/index.js`);
    const configTypescriptTypechecked = await eslint.calculateConfigForFile(`${__dirname}/../test/typescript-type-checking/index.js`);

    global.console.log(`Config eslint has warn?: ${hasWarn(configEslint)}`);
    global.console.log(`Config typescript has warn?: ${hasWarn(configTypescript)}`);
    global.console.log(`Config typescript type checking has warn?: ${hasWarn(configTypescriptTypechecked)}`);

    global.console.log('Config eslint:');
    global.console.log(JSON.stringify(configEslint, undefined, 4));
    global.console.log('Config typescript:');
    global.console.log(JSON.stringify(configTypescript, undefined, 4));
    global.console.log('Config typescript type checking:');
    global.console.log(JSON.stringify(configTypescriptTypechecked, undefined, 4));
})();
