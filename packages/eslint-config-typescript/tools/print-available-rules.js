/* eslint-disable no-undef */
/* eslint-disable no-console */
// eslint-plugin-import doesn't know how to resolve entry points in commonjs modules that are
// declared using "export" rather than the old "main" syntax in package.json.
// See https://github.com/typescript-eslint/typescript-eslint/issues/7565
//  and https://github.com/import-js/eslint-plugin-import/issues/2703
import typescriptPlugin from 'typescript-eslint';

const isTrue = val => val !== undefined && val !== false;
const recommended = key => isTrue(typescriptPlugin.plugin.rules[key].meta.docs.recommended);
const requiresTypeChecking = key => isTrue(typescriptPlugin.plugin.rules[key].meta.docs.requiresTypeChecking);
const extendsBaseRule = key => isTrue(typescriptPlugin.plugin.rules[key].meta.docs.extendsBaseRule);
const print = keys => {
    const results = {};
    keys.forEach(key => {
        results[`typescript-eslint/${key}`] = '';
    });
    console.log(JSON.stringify(results, null, 4));
};
const sortedRules = Object.keys(typescriptPlugin.plugin.rules).sort();

const typeScriptExtensions = sortedRules
    .filter(key => extendsBaseRule(key))
    .filter(key => !requiresTypeChecking(key));

const typeScriptExtensionsRequiringTypeChecks = sortedRules
    .filter(key => extendsBaseRule(key))
    .filter(key => requiresTypeChecking(key));

const typeScript = sortedRules
    .filter(key => !extendsBaseRule(key))
    .filter(key => !recommended(key))
    .filter(key => !requiresTypeChecking(key));

const typeScriptRequiringTypeChecks = sortedRules
    .filter(key => !extendsBaseRule(key))
    .filter(key => !recommended(key))
    .filter(key => requiresTypeChecking(key));

const typeScriptRecommended = sortedRules
    .filter(key => !extendsBaseRule(key))
    .filter(key => recommended(key))
    .filter(key => !requiresTypeChecking(key));

const typeScriptRecommendedTypeChecks = sortedRules
    .filter(key => !extendsBaseRule(key))
    .filter(key => recommended(key))
    .filter(key => requiresTypeChecking(key));

console.log('TypeScript Extensions:');
print(typeScriptExtensions);
console.log('TypeScript Recommended:');
print(typeScriptRecommended);
console.log('Remaining TypeScript Rules:');
print(typeScript);

console.log('TypeScript Extensions Requiring Type Checks:');
print(typeScriptExtensionsRequiringTypeChecks);
console.log('TypeScript Recommended Requiring Type Checks:');
print(typeScriptRecommendedTypeChecks);
console.log('Remaining TypeScript Rules Requiring Type Checks:');
print(typeScriptRequiringTypeChecks);