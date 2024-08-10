import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';

// Define el tipo para las propiedades del componente (si hay alguna)
interface DatePickerProps {}

// Define el componente con tipos
export const DatePicker: React.FC<DatePickerProps> = () => {
  return (
    <TouchableOpacity onPress={() => alert('Fecha')}>
       <View className='flex flex-row gap-3'>
         <View>
            <AntDesign name="leftcircle" size={18} color="#C1BDBD" />
         </View>
         <View className='flex justify-between flex-row'>
            <Text className='font-sans text-sm'>10/08/2024</Text>
            <Text className='px-2'>-</Text>
            <Text className='font-sans text-sm'>10/08/2024</Text>
         </View>
         <View>
            <AntDesign name="rightcircle" size={18} color="#C1BDBD" />
         </View>
         </View>
    </TouchableOpacity>
  );
};

