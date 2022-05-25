module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 0,
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.js', '*.vue'],
      rules: {
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'class-methods-use-this': 'off',
        'no-underscore-dangle': 'off',
        'max-len': 'off',
        'no-param-reassign': 'off',
        'no-return-await': 'off',
        'no-restricted-syntax': 'off',
        'no-console': 'off',
        'no-alert': 'off',
      },
    },
  ],
  // todo don't see a good way of solving it, will have to disable the lint
  // settings: {
  //   'import/resolver': {
  //     alias: {
  //       map: [['@', './src/']],
  //       extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue'],
  //     },
  //   },
  // },
};
