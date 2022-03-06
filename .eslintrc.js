module.exports = {
  'parser': '@typescript-eslint/parser',
  'plugins': [
    'eslint-plugin-no-jp'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  'rules': {
    'no-jp/no-jp-identifier': 2,
    'no-jp/no-jp-comment': 2,
    'semi':[2, 'never'], 
    'quotes': [2, 'single']
  }
}
