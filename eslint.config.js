import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.js'], // sprawdzamy wszystkie pliki JS
    extends: [js.configs.recommended, 'prettier'], // reguły ESLint + Prettier
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // obsługa import/export
    },
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }], // ostrzeżenie dla nieużywanych zmiennych
      'no-console': 'off', // pozwala używać console.log
    },
  },
]);
