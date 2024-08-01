import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Componentes
import { FormularioLogin } from '../Login/FormularioLogin'

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 bg-white px-5'>
      <Text className='font-sans text-xl font-bold mt-5'>Ingresar a tu cuenta</Text>
      <FormularioLogin />
    </SafeAreaView>
  );
}


export default LoginScreen;
