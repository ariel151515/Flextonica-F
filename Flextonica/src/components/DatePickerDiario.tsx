import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';


// Define el tipo para las propiedades del componente (si hay alguna)
interface DatePickerDiarioProps {}

// Define el componente con tipos
export const DatePickerDiario: React.FC<DatePickerDiarioProps> = () => {
  return (
    <TouchableOpacity onPress={() => alert('Fecha')}>
       <View className='flex flex-row gap-3'>
         <View>
            <Ionicons name="today" size={18} color="black" />
         </View>
         <View className='flex justify-between flex-row'>
            <Text className='font-sans text-sm'>Hoy</Text>
         </View>
         <View>
            <Entypo name="chevron-down" size={18} color="black" />
         </View>
         </View>
    </TouchableOpacity>
  );
};

