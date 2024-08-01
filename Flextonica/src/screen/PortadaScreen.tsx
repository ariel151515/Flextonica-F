import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define tus tipos de navegación
type RootStackParamList = {
  Login: undefined;
  Perfil: undefined;
  CrearCuenta: undefined;
  // Puedes agregar más pantallas aquí
};

const PortadaScreen: React.FC = () => {

  {/*
  // Tipar el hook useNavigation con el tipo de navegación correspondiente
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
   */}

  // Tipar el hook useNavigation para todas las pantallas
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ImageBackground 
      source={require('../../assets/portada.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View className='bottom-0 absolute pb-10'>
          <Text className='font-sans text-4xl font-bold text-white text-center'>Libera Tu Potencial al Máximo</Text>
          <Text className='font-sans text-base text-grisTextoPortada text-center mt-2'>Transforma tu nutrición con una guía flexible y planificación avanzada para el control total de tus macronutrientes</Text>
          <View className='pt-5'>
              <TouchableOpacity onPress={() => navigation.navigate('CrearCuenta')}>
                <View className='bg-amarillo rounded-lg py-3'>
                  <Text className='font-sans text-base text-black text-center font-bold'>Crear cuenta</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View className='bg-grisBtn rounded-lg py-3 mt-2'>
                  <Text className='font-sans text-base text-grisTextoBtn text-center'>¿Ya tiene una cuenta?</Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Opcional: para darle un efecto de oscurecimiento
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding:'5%'
  }
});

export default PortadaScreen;
