module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'google',
    'plugin:sonarjs/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'tsconfigRootDir': __dirname,
    'project': ['./tsconfig.json'],
  },
  'plugins': [
    '@typescript-eslint',
    'sonarjs',
  ],
  'rules': {
    'valid-jsdoc': 0,
    'require-jsdoc': 0,
    'linebreak-style': ['error', 'windows'],
    'new-cap': 0,
    'object-shorthand': 'error',
    'no-extra-semi': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    'no-invalid-this': 1,
    'prefer-template': 1,
    'max-len': ["error", { "code": 180 }],
    
    '@typescript-eslint/no-inferrable-types': 1,
    'no-global-assign': 1,
    'sonarjs/no-duplicate-string': 1,
    // 'sonarjs/no-commented-out-code': 1,
    'eqeqeq': 1,
    'max-lines': ["error", {"max": 1000, "skipBlankLines": true}],
    'no-alert': 1,
  },
};
