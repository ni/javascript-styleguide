const plugin = require('@angular-eslint/eslint-plugin');
const templatePlugin = require('@angular-eslint/eslint-plugin-template');

const isTrue = val => val !== undefined && val !== false;
const recommended = rule => isTrue(rule.meta.docs.recommended);
const print = (keys, prefix = '@angular-eslint') => {
    const results = {};
    keys.forEach(key => { results[`${prefix}/${key}`] = ''; });
    global.console.log(JSON.stringify(results, null, 4));
};
const sortedRules = Object.keys(plugin.rules).sort();
const sortedTemplateRules = Object.keys(templatePlugin.rules).sort();

const angular = sortedRules.filter(key => !recommended(plugin.rules[key]));
const angularRecommended = sortedRules.filter(key => recommended(plugin.rules[key]));
const template = sortedTemplateRules.filter(key => !recommended(templatePlugin.rules[key]));
const templateRecommended = sortedTemplateRules.filter(key => recommended(templatePlugin.rules[key]));

global.console.log('Angular TypeScript Recommended:');
print(angularRecommended);
global.console.log('Remaining Angular TypeScript Rules:');
print(angular);
global.console.log('Angular Template Recommended:');
print(templateRecommended, '@angular-eslint/template');
global.console.log('Remaining Angular Template Rules:');
print(template, '@angular-eslint/template');
