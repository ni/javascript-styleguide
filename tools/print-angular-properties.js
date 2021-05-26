const plugin = require('@angular-eslint/eslint-plugin');
const templatePlugin = require('@angular-eslint/eslint-plugin-template');

const isTrue = val => val !== undefined && val !== false;
const recommended = rule => isTrue(rule.meta.docs.recommended);
const print = keys => {
    const results = {};
    keys.forEach(key => { results[`@angular-eslint/${key}`] = ''; });
    global.console.log(JSON.stringify(results, null, 4));
};

const angular = Object.keys(plugin.rules).filter(key => !recommended(plugin.rules[key]));
const angularRecommended = Object.keys(plugin.rules).filter(key => recommended(plugin.rules[key]));
const template = Object.keys(templatePlugin.rules).filter(key => !recommended(templatePlugin.rules[key]));
const templateRecommended = Object.keys(templatePlugin.rules).filter(key => recommended(templatePlugin.rules[key]));

global.console.log('Note: When printing this does not print the default config and assumes "error"');
global.console.log('Angular TypeScript Recommended:');
print(angularRecommended);
global.console.log('Remaining Angular TypeScript Rules:');
print(angular);
global.console.log('Angular Template Recommended:');
print(templateRecommended);
global.console.log('Remaining Angular Template Rules:');
print(template);
