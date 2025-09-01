/* eslint-disable no-undef */
/* eslint-disable no-console */
import angularPlugin from '@angular-eslint/eslint-plugin';
import templatePlugin from '@angular-eslint/eslint-plugin-template';

const isTrue = val => val !== undefined && val !== false;
const recommended = rule => isTrue(rule.meta.docs.recommended);
const print = (keys, prefix = '@angular-eslint') => {
    const results = {};
    keys.forEach(key => {
        results[`${prefix}/${key}`] = '';
    });
    console.log(JSON.stringify(results, null, 4));
};
const sortedRules = Object.keys(angularPlugin.rules).sort();
const sortedTemplateRules = Object.keys(templatePlugin.rules).sort();

const angular = sortedRules.filter(
    key => !recommended(angularPlugin.rules[key])
);
const angularRecommended = sortedRules.filter(key => recommended(angularPlugin.rules[key]));
const template = sortedTemplateRules.filter(
    key => !recommended(templatePlugin.rules[key])
);
const templateRecommended = sortedTemplateRules.filter(key => recommended(templatePlugin.rules[key]));

console.log('Angular Recommended:');
print(angularRecommended);
console.log('Remaining Angular Rules:');
print(angular);
console.log('Angular Template Recommended:');
print(templateRecommended, '@angular-eslint/template');
console.log('Remaining Angular Template Rules:');
print(template, '@angular-eslint/template');
