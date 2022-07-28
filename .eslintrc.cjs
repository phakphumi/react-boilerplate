module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'import',
    'react',
    'unused-imports',
    '@typescript-eslint',
  ],
  'rules': {
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-shadow': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-duplicates': 'warn',
    'import/no-useless-path-segments': 'warn',
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
      },
    ],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
    'quotes': ['error', 'single', {
      avoidEscape: true,
    }],
    'react/no-unescaped-entities': 'error',
    'react/prop-types': 'off',
    'semi': ['error', 'always'],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' },
    ],
  },
};
