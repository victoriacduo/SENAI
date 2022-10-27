import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TelaHome from './src/pages/Home/index.js';
import TelaRes from './src/pages/Restaurantes/index.js';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TelaHome}/>
        <Stack.Screen name="Restaurantes" component={TelaRes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
