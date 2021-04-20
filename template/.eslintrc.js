module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import', 'react-hooks'],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _constants: './src/constants',
          _helpers: './src/helpers',
          _interfaces: './src/interfaces',
          _navigators: './src/navigators',
          _middlewares: './src/middlewares',
          _screens: './src/screens',
          _services: './src/services',
          _store: './src/store',
          _utils: './src/utils',
        },
      },
      'babel-module': {},
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
