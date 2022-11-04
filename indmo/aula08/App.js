import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import PrimeiraTela from './src/pages/aQuestion/index';
import SegundaTela from './src/pages/bQuestion/index';
import TerceiraTela from './src/pages/cQuestion/index';
import QuartaTela from './src/pages/dQuestion/index';
import QuintaTela from './src/pages/eQuestion/index';
import UltimaTela from './src/pages/pontuacao/index';

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Primeira" component={PrimeiraTela}/>
        <Stack.Screen name="Segunda" component={SegundaTela}/>
        <Stack.Screen name="Terceira" component={TerceiraTela}/>
        <Stack.Screen name="Quarta" component={QuartaTela}/>
        <Stack.Screen name="Quinta" component={QuintaTela}/>
        <Stack.Screen name="Final" component={UltimaTela}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}