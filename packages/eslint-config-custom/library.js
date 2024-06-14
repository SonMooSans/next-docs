const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'no-console': 'off',

    'import/no-extraneous-dependencies': 'off',
    'import/no-default-export': 'off',

    // handled by typescript eslint
    'import/default': 'off',
    'import/export': 'off',
    'import/namespace': 'off',
    'import/no-unresolved': 'off',
  },
};
