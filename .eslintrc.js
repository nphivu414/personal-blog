module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['react-app', 'prettier'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    "prettier/prettier": "error",
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // semi: ['error', 'always'],
    indent: ["error", 2]
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
