import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

// Screens
import HomeScreen from '../screen/Home';
import SettingScreen from '../screen/Setting';
import PerfilScreen from '../screen/Perfil';

// TabNavigator
import TabNavigator from './TabNavigator';

// Define the type for the stack navigator's parameters
type RootStackParamList = {
  Tabs: undefined;
  Home: undefined;
  Setting: undefined;
  Perfil: undefined;
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Tabs" 
          component={TabNavigator}  
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
