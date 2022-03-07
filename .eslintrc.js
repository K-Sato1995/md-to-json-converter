/* eslint-disable */
module.exports = {
  'parser': '@typescript-eslint/parser',
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  'ignorePatterns': ['**/dist/'],
  'plugins': [
    'eslint-plugin-no-jp',
    '@typescript-eslint'
  ],
  'rules': {
    'no-jp/no-jp-identifier': 2,
    'no-jp/no-jp-comment': 2,
    'semi':[2, 'never'], 
    'quotes': [2, 'single']
  }
}
