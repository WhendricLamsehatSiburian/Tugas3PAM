// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanUtama from './HalamanUtama';
import Pencarian from "./Pencarian";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HalamanUtama" component={HalamanUtama} />
        <Stack.Screen name="Pencarian" component={Pencarian} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;