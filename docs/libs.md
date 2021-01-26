# Supported and Implemented Libs

In general, people tend to use same libraries for doing the same kind of feature across projects. On intention of avoiding copy-and-paste code, those are Eryn implemented and supported libs:

- [**Axios**](https://github.com/axios/axios) for requests
- [**Redux**](https://redux.js.org/) for Global State Management + [**Redux Thunk**](https://github.com/reduxjs/redux-thunk) for async calls inside actions
- [**Eslint**](https://eslint.org/) for code maintance and general fixes + [_import resolver_](https://github.com/tleunen/babel-plugin-module-resolver) ([Babel](https://babeljs.io/)/Eslint)
- [**Prettier**](https://prettier.io/) basic support if wanted
- [**React Navigation**](https://reactnavigation.org/) for screens
- [**React Native Dotenv**](https://github.com/goatandsheep/react-native-dotenv) for Environment Variables

There are also other libs not implemented/configured such as `Modal` support or `DatePicker`. Those are up to the user.

## Are there options beside those libs?

Yes. Even having a personal prefference for those libs, there are other options available but not implemented or I never used them.

For example: I heard good comments about [**Redux Saga**](https://redux-saga.js.org/) and its approach and usage instead of **Redux Thunk** and I believe that this change can be easily made for that case.

But if you want to use another State Management Lib, **Redux Thunk** will probably need a change and this kind of thing is totally up to you.

## "I want to use X instead of Y and I think that this can be implemented"

Awesome! You can open or check the existance of [Issues](https://github.com/caiangums/react-native-template-caian/issues) or even [Pull Requests](https://github.com/caiangums/react-native-template-caian/pulls) with that implementation or options.
