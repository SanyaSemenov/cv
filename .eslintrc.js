module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'standard',
    './.lint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  globals: {
    describe: 'readonly',
    beforeEach: 'readonly',
    beforeAll: 'readonly',
    it: 'readonly',
    expect: 'readonly',
    afterEach: 'readonly',
    jasmine: 'readonly',
  },
}
