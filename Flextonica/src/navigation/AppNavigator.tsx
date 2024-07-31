import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

// Screens
import DiarioScreen from '../screen/DiarioScreen';
import SemanalScreen from '../screen/SemanalScreen';
import PortadaScreen from '../screen/PortadaScreen';

// TabNavigator
import TabNavigator from './TabNavigator';

// Create the stack navigator
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabNavigator}  options={{ headerShown: false }} />
        <Stack.Screen name="Portada" component={PortadaScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
