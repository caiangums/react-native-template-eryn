import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen, StartScreen } from '_screens';

const RootStack = createStackNavigator();

const DEFAULT_OPTIONS = { gestureEnabled: false };

function AppNavigator(props) {
  return (
    <NavigationContainer {...props}>
      <RootStack.Navigator headerMode="none">
        {/* Place your screens here or nest Navigators */}
        <RootStack.Screen name="Start" component={StartScreen} />
        <RootStack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={DEFAULT_OPTIONS}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
