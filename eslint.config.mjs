import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
    {
        plugins: { prettier: prettierPlugin },
        rules: {
            'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'none' }]
        }
    },
    {
        ignores: ['node_modules', 'dist', 'build', 'coverage']
    }
];
