const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': isProduction ? 'warn' : 'off',
    'no-debugger': isProduction ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'no-void': 'off',
    'no-return-await': 'off',
    camelcase: 'off',
  },
};
