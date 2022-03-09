/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/redux';
import {Login} from './src/screens/Login';

const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;
