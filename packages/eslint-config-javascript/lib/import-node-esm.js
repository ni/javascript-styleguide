import { defineConfig } from 'eslint/config';

/**
 * Configuration overrides to support node esm resolution
 * See: https://nodejs.org/api/esm.html#terminology
 */
export const importNodeEsmConfig = defineConfig([
    {
        rules: {
            // node esm relative resolution requires extensions
            'import/extensions': 'off',
            // node esm relative resolution requires full path name
            'import/no-useless-path-segments': 'off',
            // eslint-plugin-import doesn't know how to resolve entry points in packages
            // that use modern export maps in package.json.
            // https://github.com/typescript-eslint/typescript-eslint/issues/7565
            // https://github.com/import-js/eslint-plugin-import/issues/2703
            'import/no-unresolved': 'off',
        }
    }
]);
