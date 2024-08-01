import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const PerfilScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Perfil</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PerfilScreen;
