import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Componentes
import { Header } from './../components/Header'
import { BoxDiario } from './../components/BoxDiario'

const DiarioScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1 bg-grisBase'>
      <StatusBar barStyle="dark-content" backgroundColor="#F3F3F3" />
      <Header />
      <BoxDiario />
    </SafeAreaView>
  );
}


export default DiarioScreen;
