import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const SemanalScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#F3F3F3" />
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
