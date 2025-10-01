import { defineConfig } from 'eslint/config';

export const strict = defineConfig([{
    rules: {
        /*
            babel inserts `'use strict';` for us
        */
        strict: ['error', 'never'],
    },
}]);
