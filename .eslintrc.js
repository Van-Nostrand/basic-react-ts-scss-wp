module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 13
  },
  'plugins': [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    // no curly braces for 1 liners
    'curly': 0,
    // prevent debugger during production
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // async await
    'generator-star-spacing': 0,
    // 'space-after-keywords': 1,
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      'always'
    ],
    // only throw errors, no other variables
    'no-throw-literal': 0,
    'prefer-const': [
      'error',
      {
        'destructuring': 'any',
        'ignoreReadBeforeAssign': false
      }
    ],
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': 'detect'
    }
  }
}
