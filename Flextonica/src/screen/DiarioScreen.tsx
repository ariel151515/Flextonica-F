import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Alert, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Componentes
import { Header } from './../components/Header'
import { BoxDiario } from './../components/BoxDiario'
import { BoxComidas } from './../components/BoxComidas'
import { BoxAgua } from './../components/BoxAgua'
import { BoxNotaDiaria } from './../components/BoxNotaDiaria'

const DiarioScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1 bg-grisBase'>
       <ScrollView style={styles.container}>
          <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#F3F3F3" />
          <Header />
          <BoxDiario />
          <BoxComidas />
          <BoxAgua />
          <BoxNotaDiaria />
       </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 20,
  },
});

export default DiarioScreen;
