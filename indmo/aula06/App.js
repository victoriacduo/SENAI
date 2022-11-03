import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TelaLogin from './src/pages/Login/index.js';
import TelaHome from './src/pages/Home/home.js';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TelaLogin}/>
        <Stack.Screen name="Home" component={TelaHome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}