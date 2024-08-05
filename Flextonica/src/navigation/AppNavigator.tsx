import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ContextoUser } from '../context/contextoUser';

// Screens
import DiarioScreen from '../screen/DiarioScreen';
import SemanalScreen from '../screen/SemanalScreen';
import PortadaScreen from '../screen/PortadaScreen';
import LoginScreen from '../screen/Login/LoginScreen';
import CrearCuentaScreen from '../screen/CrearCuenta/CrearCuentaScreen';
import PerfilScreen from '../screen/PerfilScreen';

// TabNavigator
import TabNavigator from './TabNavigator';

// Create the stack navigator
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  // Usa useContext para acceder al contexto
  const { isAuthenticated } = useContext(ContextoUser); // Asegúrate de usar correctamente el contexto

  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={isAuthenticated ? TabNavigator : PortadaScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Portada" component={PortadaScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: ' '}}/>
        <Stack.Screen name="CrearCuenta" component={CrearCuentaScreen} options={{ headerTitle: ' '}}/>
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ headerTitle: ' '}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
