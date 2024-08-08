import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { PorveedorContextoUser } from './src/context/contextoUser';

// Navigation
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <PorveedorContextoUser>
      <AppNavigator />
    </PorveedorContextoUser>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
