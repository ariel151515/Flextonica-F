import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { BoxSemanal } from '../components/BoxSemanal';
import { Header } from '../components/Header';
import { BoxDiasSemana } from '../components/BoxDiasSemana';
import { BoxNotaSemanal } from './../components/BoxNotaSemanal';

const SemanalScreen: React.FC = () => {
  return (
  <SafeAreaView className='flex-1 bg-grisBase'>
    <ScrollView style={styles.container}>
       <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#F3F3F3" />
       <Header props="semanal"/>
       <BoxSemanal />
       <BoxDiasSemana />
       <BoxNotaSemanal />
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

export default SemanalScreen;
