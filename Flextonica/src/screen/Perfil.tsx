import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Perfil: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Perfil;
