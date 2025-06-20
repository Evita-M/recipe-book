import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ),
  {
    plugins: ['prettier', 'tailwindcss'],
    rules: {
      'prettier/prettier': 'error',
      // Optionally, you can add Tailwind-specific rules here
      // "tailwindcss/classnames-order": "warn",
    },
  },
];

export default eslintConfig;
