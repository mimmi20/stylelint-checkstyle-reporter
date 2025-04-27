import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  prettierConfig,
  ...tseslint.configs.recommended,
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'array-callback-return': 'error',
      'no-empty': [
        'error',
        {
          allowEmptyCatch: true,
        },
      ],
      'no-lonely-if': 'error',
      'no-var': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: false,
        },
      ],
      'prefer-destructuring': [
        'error',
        {
          object: true,
          array: false,
        },
      ],
      'prefer-spread': 'error',
      radix: 'error',
      strict: 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    files: ['src/**/*.{mjs,ts}', 'eslint.config.mjs', 'prettier.config.mjs', 'rollup.config.mjs', 'test/config/stylelint.config.mjs', 'jest.config.ts'],
    languageOptions: {
      sourceType: 'module',
    },
  },
  {
    ignores: ['{src,test}/**/*.d.ts', '{src,test}/**/*.js', '{src,test}/*.js', 'node_modules/**/*.{js,mjs,cjs,ts}'],
  }
);
