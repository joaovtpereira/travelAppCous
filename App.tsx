/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import Home from './src/screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import AttractionDetails from './src/screens/AttractionDetails';
import Gallery from './src/screens/Gallery';

const Stack = createStackNavigator();

function App() {
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={AttractionDetails} name="AttractionDetails" />
        <Stack.Screen component={Gallery} name="Gallery" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
