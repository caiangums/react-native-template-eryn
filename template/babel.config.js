module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx'],
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
    ],
  ],
};
