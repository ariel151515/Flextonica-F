import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

// Define el tipo para las propiedades del componente `ItemComidas` (si hay alguna)
interface ItemAguaProps {}

// Componente `ItemComidas`
export const ItemAgua: React.FC<ItemAguaProps> = () => {
  return (
    <View className='bg-white w-full px-5 py-4' style={{ borderTopWidth: 1, borderColor: '#F3F3F6' }}>
      <View className='flex justify-between flex-row items-center'>
        <View>
          <Text className='font-sans text-sm'>2 Tazas de 10</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="notifications-active" size={18} color="#E7E6E6" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define el tipo para las propiedades del componente `BotonBox` (si hay alguna)
interface BotonBoxProps {}

// Componente `BotonBox`
export const BotonBox: React.FC<BotonBoxProps> = () => {
  return (
    <TouchableOpacity className='bg-white w-full px-5 py-4' style={{ borderTopWidth: 1, borderColor: '#F3F3F6' }}>
      <View className='flex flex-row items-center gap-3'>
        <FontAwesome6 name="plus" size={18} color="black" />
        <Text className='font-sans text-sm font-semibold'>AÑADIR ENTRADA</Text>
      </View>
    </TouchableOpacity>
  );
};

// Define el tipo para las propiedades del componente `BoxAgua`
interface BoxAguaProps {}

// Componente `BoxAgua`
export const BoxAgua: React.FC<BoxAguaProps> = () => {
  return (
    <View className='flex w-full bg-white mt-2' style={styles.container}>
      <View className='bg-grisClaro w-full flex-row justify-between py-4 px-5'>
        <Text className='font-sans text-base font-bold'>Agua</Text>
        <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={18} color="#DBD9D9" />
        </TouchableOpacity>
      </View>
      <ItemAgua />
      <BotonBox />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    left: 0,
    backgroundColor: '#ffffff',
    zIndex: 2,
    elevation: 2,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
