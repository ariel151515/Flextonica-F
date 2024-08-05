import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, ActivityIndicator } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Funcion de firebase para login
import { Register } from '../../utils/authService';

// Icono
import Octicons from '@expo/vector-icons/Octicons';

// Firebase
import { getAuth, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import app from './../../../firebase/firebase-config';
const auth = getAuth(app);

// Iconos de
const eyeClosed = <Octicons name="eye-closed" size={24} color="#C1BEBE" />;
const eye = <Octicons name="eye" size={24} color="#C1BEBE" />;

// Define tus tipos de navegación
type RootStackParamList = {
  Portada: undefined;
  Login: undefined;
  CrearCuenta: undefined
};

export const FormularioCrearCuenta: React.FC = () => {
  // Tipar el hook useNavigation para todas las pantallas
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  
  // State para el formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Icono de password
  const [eyeActive, setEyeActive] = useState(true);
  const handleEyePress = () => {
    setEyeActive(!eyeActive);
  };

   // Lógica para determinar si el botón debe estar habilitado
   const isButtonDisabled: boolean = !email || !password || loading;

  const handleRegistro = () => {
     Register(email, password, navigation, setLoading);
  };

  return (
    <View className='flex-1 bg-white mt-10'>
      <View>
          <View className='flex flex-row items-center gap-3'>
              <Text>Nombre</Text>
          </View>
          <View className='mt-3'>
              <TextInput 
                   placeholder='Ingresar nombre'
                   onChangeText={setNombre}
                   value={nombre}
                   className='border border-slate-300 px-5 py-2 rounded-lg text-base'/>
          </View>
      </View>

      <View className='mt-5'>
          <View className='flex flex-row items-center gap-3'>
              <Text>Email</Text>
          </View>
          <View className='mt-3'>
              <TextInput 
                 placeholder='Ingresar email'
                 onChangeText={setEmail}
                 value={email}
              className='border border-slate-300 px-5 py-2 rounded-lg text-base'/>
          </View>
      </View>

      <View className='mt-5'>
          <View className='flex flex-row items-center gap-3'>
              <Text>Contraseña</Text>
          </View>
          <View className='mt-3'>
              <View className='flex flex-row items-center border border-slate-300 rounded-lg justify-between pr-4'>
                <View>
                   <TextInput placeholder='Ingresar contraseña'
                              onChangeText={setPassword}
                              value={password}
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
          onPress={handleRegistro}
          className={`flex items-center justify-center mt-10 px-10 py-3 rounded-md ${isButtonDisabled ? 'bg-gray-400' : 'bg-azulPrimario'} ${isButtonDisabled ? 'opacity-60' : 'opacity-100'}`}
          disabled={isButtonDisabled}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text className='font-sans font-bold text-base text-white'>Crear cuenta</Text>
          )}
        </TouchableOpacity>

      <TouchableOpacity className='items-center' onPress={() => navigation.navigate('Login')}>
          <Text className='mt-6 text-sm text-slate-400'>¿Ya tienes una cuenta?</Text>
      </TouchableOpacity>

    </View>
  );
}

