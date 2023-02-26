/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import AttractionDetails from './src/screens/AttractionDetails';
import Galery from './src/screens/Galery';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={AttractionDetails} name="AttractionDetails" />
        <Stack.Screen component={Galery} name="Galery" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
