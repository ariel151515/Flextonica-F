import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


const NutricionScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Nutricion Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#086BEF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default NutricionScreen;
