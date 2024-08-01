import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const SemanalScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Setting</Text>
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

export default SemanalScreen;
