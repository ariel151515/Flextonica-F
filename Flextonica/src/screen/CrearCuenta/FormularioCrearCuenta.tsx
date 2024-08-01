import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Iconos
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';

// Define tus tipos de navegación
type RootStackParamList = {
  Portada: undefined;
  Login: undefined;
};

const eyeClosed = <Octicons name="eye-closed" size={24} color="#C1BEBE" />;
const eye = <Octicons name="eye" size={24} color="#C1BEBE" />;

export const FormularioCrearCuenta: React.FC = () => {

  // Tipar el hook useNavigation para todas las pantallas
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [eyeActive, setEyeActive] = useState(true);
  const handleEyePress = () => {
    setEyeActive(!eyeActive);
  };

  return (
    <View className='flex-1 bg-white mt-10'>
      <View>
          <View className='flex flex-row items-center gap-3'>
              <Feather name="user" size={18} color="black" />
              <Text>Nombre</Text>
          </View>
          <View className='mt-3'>
              <TextInput placeholder='Ingresar nombre'
              className='border border-slate-300 px-5 py-2 rounded-sm text-base'/>
          </View>
      </View>

      <View className='mt-5'>
          <View className='flex flex-row items-center gap-3'>
              <Fontisto name="email" size={18} color="black" />
              <Text>Email</Text>
          </View>
          <View className='mt-3'>
              <TextInput placeholder='Ingresar email'
              className='border border-slate-300 px-5 py-2 rounded-sm text-base'/>
          </View>
      </View>

      <View className='mt-5'>
          <View className='flex flex-row items-center gap-3'>
              <AntDesign name="lock1" size={18} color="black" />
              <Text>Contraseña</Text>
          </View>
          <View className='mt-3'>
              <View className='flex flex-row items-center border border-slate-300 rounded-sm justify-between pr-4'>
                <View>
                   <TextInput placeholder='Ingresar contraseña'
                              className='px-5 py-2 rounded-sm text-base'
                              secureTextEntry={eyeActive ? true : false}
                              />
                </View>
                <View>
                  <TouchableOpacity onPress={handleEyePress}>{!eyeActive ? eye : eyeClosed}</TouchableOpacity>
                </View>
              </View>
          </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Portada')}
        className='flex items-center justify-center mt-10 bg-amarillo hover:bg-blue-600 px-10 py-3 rounded-md text-white'>
        <Text className='font-sans font-bold text-base'>Crear cuenta</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        className='items-center'>
       <Text className='mt-6 text-sm text-slate-400'>¿Ya tienes una cuenta?</Text>
      </TouchableOpacity>

    </View>
  );
}


