/**
 * Based on Eryn Template
 * https://github.com/caiangums/react-native-template-eryn
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { AppNavigator } from '_navigators';
import store from '_store';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
