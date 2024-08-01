import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Componentes
import { FormularioCrearCuenta } from '../CrearCuenta/FormularioCrearCuenta'

const CrearCuentaScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 bg-white px-5'>
      <Text className='font-sans text-xl font-bold mt-5'>Crear cuenta</Text>
      <FormularioCrearCuenta />
    </SafeAreaView>
  );
}


export default CrearCuentaScreen;
