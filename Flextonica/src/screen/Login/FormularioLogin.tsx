import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Funcion de firebase para login
import { logueo } from '../../utils/authService';

// Iconos
import Octicons from '@expo/vector-icons/Octicons';

// Define tus tipos de navegación
type RootStackParamList = {
  Portada: undefined;
  Tabs: undefined;
  Login: undefined;
};

const eyeClosed = <Octicons name="eye-closed" size={24} color="#C1BEBE" />;
const eye = <Octicons name="eye" size={24} color="#C1BEBE" />;

export const FormularioLogin: React.FC = () => {
  // Tipar el hook useNavigation para todas las pantallas
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Lógica para determinar si el botón debe estar habilitado
  const isButtonDisabled: boolean = !email || !password || loading;

  const [eyeActive, setEyeActive] = useState(true);
  const handleEyePress = () => {
    setEyeActive(!eyeActive);
  };
  
  const handleLogin = () => {
    logueo(email, password, navigation, setLoading);
  };

  return (
    <SafeAreaView className='bg-white'>
      <View>
          <View className='flex flex-row items-center gap-3'>
              <Text className='text-black'>Email</Text>
          </View>
          <View className='mt-3'>
              <TextInput placeholder='Ingresar email'
                          onChangeText={setEmail}
                          value={email}
                          className='border border-slate-400 px-5 py-2 rounded-md text-base'/>
          </View>
      </View>

      <View className='mt-5'>
          <View className='flex flex-row items-center gap-3'>
              <Text className='text-black'>Contraseña</Text>
          </View>
          <View className='mt-3'>
              <View className='flex flex-row items-center border border-slate-400 rounded-md justify-between pr-4'>
                <View>
                   <TextInput placeholder='Ingresar contraseña'
                              onChangeText={setPassword}
                              value={password}
                              className='px-5 py-2 rounded-sm text-base '
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
          onPress={handleLogin}
          className={`flex items-center justify-center mt-10 px-10 py-3 rounded-md ${isButtonDisabled ? 'bg-gray-400' : 'bg-azulPrimario'} ${isButtonDisabled ? 'opacity-60' : 'opacity-100'}`}
          disabled={isButtonDisabled}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text className='font-sans font-bold text-base text-white'>Ingresar</Text>
          )}
        </TouchableOpacity>

      <View className='items-center'>
         <Text className='mt-6 text-sm text-slate-400'>¿Olvidaste tu contraseña?</Text>
      </View>

    </SafeAreaView>
  );
}


