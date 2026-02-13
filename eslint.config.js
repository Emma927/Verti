import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.js'], // check all JS files
    extends: [js.configs.recommended, 'prettier'], // ESLint rules + Prettier
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // support for import/export
    },
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }], // warning for unused variables
      'no-console': 'off', // allow using console.log
    },
  },
]);
