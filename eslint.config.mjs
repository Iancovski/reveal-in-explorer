import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default [
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/semi': ['error', 'always'],
        },

        languageOptions: {
            globals: globals.node
        },
        ignores: [
            '.out/'
        ]
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];