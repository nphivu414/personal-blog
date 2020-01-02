module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: `react-app`,
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  globals: {
    __PATH_PREFIX__: true,
    __PREFIX_PATHS__: true,
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
}
