/* eslint-disable no-undef */
/* eslint-disable no-console */
import angularPlugin from 'angular-eslint';

const print = keys => {
    const results = {};
    keys.forEach(key => {
        results[`${key}`] = '';
    });
    console.log(JSON.stringify(results, null, 4));
};
const getRules = (configs, configName) => {
    const config = configs.find(cfg => cfg.name === configName);
    return config ? Object.keys(config.rules).sort() : {};
};

const angularTsRecommended = getRules(angularPlugin.configs.tsRecommended, 'angular-eslint/ts-recommended');
const angularTemplateRecommended = getRules(angularPlugin.configs.templateRecommended, 'angular-eslint/template-recommended');
const angularTsAll = getRules(angularPlugin.configs.tsAll, 'angular-eslint/ts-all');
const angularTemplateAll = getRules(angularPlugin.configs.templateAll, 'angular-eslint/template-all');

const angular = angularTsAll.filter(key => !angularTsRecommended.includes(key));
const template = angularTemplateAll.filter(key => !angularTemplateRecommended.includes(key));

console.log('Angular Recommended:');
print(angularTsRecommended);
console.log('Remaining Angular Rules:');
print(angular);
console.log('Angular Template Recommended:');
print(angularTemplateRecommended, '@angular-eslint/template');
console.log('Remaining Angular Template Rules:');
print(template, '@angular-eslint/template');
