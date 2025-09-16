/* eslint-disable no-console */
import plugin from 'eslint-plugin-playwright';

const isTrue = val => val !== undefined && val !== false;
const recommended = rule => isTrue(rule.meta.docs.recommended);
const print = (keys, prefix = 'playwright') => {
    const results = {};
    keys.forEach(key => {
        results[`${prefix}/${key}`] = '';
    });
    console.log(JSON.stringify(results, null, 4));
};
const sortedRules = Object.keys(plugin.rules).sort();

const playwright = sortedRules.filter(key => !recommended(plugin.rules[key]));
const playwrightRecommended = sortedRules.filter(key => recommended(plugin.rules[key]));

console.log('Playwright Recommended:');
print(playwrightRecommended);
console.log('Remaining Playwright Rules:');
print(playwright);
