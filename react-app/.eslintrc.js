module.exports = {
  'parser': 'babel-eslint',
  'env': {
   'browser': true,
   'es6': true,
   'node': true
  },
  'parserOptions': {
   'ecmaVersion': 6,
   'sourceType': 'module'
  },
  'extends': 'airbnb',
  'rules': {
   'no-undef': 'off',
   'no-console': [0],
   'semi': [0],
   'react/jsx-filename-extension': [0],
   'jsx-a11y/anchor-is-valid': [0],
   'react/prefer-stateless-function': [0],
   'linebreak-style': [0, 'windows'],
   'no-useless-constructor': [0],
   'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
   'import/no-unresolved': [1],
  }
}