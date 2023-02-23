const plugin = require('eslint-plugin-playwright');

const isTrue = val => val !== undefined && val !== false;
const recommended = rule => isTrue(rule.meta.docs.recommended);
const print = (keys, prefix = 'eslint-plugin-playwright') => {
    const results = {};
    keys.forEach(key => { results[`${prefix}/${key}`] = ''; });
    global.console.log(JSON.stringify(results, null, 4));
};
const sortedRules = Object.keys(plugin.rules).sort();

const playwright = sortedRules.filter(key => !recommended(plugin.rules[key]));
const playwrightRecommended = sortedRules.filter(key => recommended(plugin.rules[key]));

global.console.log('playwright Recommended:');
print(playwrightRecommended);
global.console.log('Remaining playwright Rules:');
print(playwright);
