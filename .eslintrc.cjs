module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'unused-imports', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-shadow': 'error',
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
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'react/no-unescaped-entities': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'always'],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // Rules regarding minimize code complexity
    'max-lines': [
      'warn',
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'warn',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-nested-callbacks': ['warn', { max: 2 }],
    'max-depth': ['warn', { max: 3 }],
    'max-params': ['warn', { max: 2 }],
    'no-param-reassign': ['error'],
    complexity: ['warn', { max: 5 }],
  },
};
