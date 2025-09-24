// eslint-disable-next-line import/no-useless-path-segments
import { javascriptConfig } from './index.js';

export default [
    ...javascriptConfig,
    {
        files: ['eslint.config.js'],
        rules: {
            'import/no-default-export': 'off'
        }
    },
    {
        files: ['**/*.js'],
        rules: {
            'import/extensions': 'off'
        },
    },
];
