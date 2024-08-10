import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Define el tipo para las propiedades del componente (si hay alguna)
interface DatePickerProps {}

// Define el componente con tipos
export const DatePicker: React.FC<DatePickerProps> = () => {
  return (
    <TouchableOpacity onPress={() => alert('Fecha')}>
       <View className='flex flex-row gap-3'>
         <View>
            <MaterialIcons name="date-range" size={18} color="black" />
         </View>
         <View>
            <Text className='font-sans text-sm'>Hoy</Text>
         </View>
         <View>
             <Entypo name="chevron-down" size={18} color="black" />
         </View>
         </View>
    </TouchableOpacity>
  );
};

