import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

import TelaUm from './src/pages/tela1/index';
import TelaDois from './src/pages/tela2/index';
import TelaTres from './src/pages/tela3/index';

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="TelaUm" component={TelaUm} />
        <Drawer.Screen name="TelaDois" component={TelaDois} />
        <Drawer.Screen name="TelaTres" component={TelaTres} />
      </Drawer.Navigator>

      {/* <Tab.Navigator initialRouteName="Feed"
      activeColor="#7D6E83"
      barStyle={{ backgroundColor: '#F8EDE3' }}>
        <Tab.Screen name="TelaUm" component={TelaUm} options={{
          tabBarLabel: 'Teste',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}/>
        <Tab.Screen name="TelaDois" component={TelaDois} options={{
          tabBarLabel: 'Oto teste',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="laptop" color={color} size={25} />
          ),
        }}/>
        <Tab.Screen name="TelaTres" component={TelaTres} options={{
          tabBarLabel: 'Maizum',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}/>
    </Tab.Navigator> */}
    </NavigationContainer>
  );
}