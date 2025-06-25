export default [
    {
      files: ['**/*.ts'], // Lint ts files
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 2],
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'eqeqeq': ['error', 'always'],
      },
    },
  ];