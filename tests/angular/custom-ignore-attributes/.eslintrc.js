const {ignoreAttributes} = require('@ni/eslint-config-angular/template/options');

module.exports = {
    overrides: [{
        files: ['*.html'],
        rules: {
            '@angular-eslint/template/i18n': [
                'error',
                {
                    checkId: false,
                    ignoreAttributes: [...ignoreAttributes.all, 'custom-field']
                }
            ],
        }
    }, {
        files: ['*.spec.ts*.html'],
        rules: {
            '@angular-eslint/template/i18n': 'off'
        }
    }]
};
