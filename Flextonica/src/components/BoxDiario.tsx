import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface BoxDiarioProps {}

export const BoxDiario: React.FC<BoxDiarioProps> = () => {
  return (
    <View className='shadow bg-white' style={styles.container}>

      <View className='flex flex-row justify-between bg-black'>
        <View className='bg-azulPrimario pt-2 ' style={{width:'24%'}}>
          <Text className='text-white font-sans text-base pl-5'>Diario</Text>
        </View>
        <View className='bg-black px-4 h-10 justify-center flex-1'>
          <Text className='text-white text-center font-sans text-base'>KCAL</Text>
        </View>
        <View className='bg-black px-3 h-10 justify-center flex-1'>
          <Text className='text-white text-center font-sans text-base'>PR</Text>
        </View>
        <View className='bg-black px-3 h-10 justify-center flex-1'>
          <Text className='text-white text-center font-sans text-base'>CH</Text>
        </View>
        <View className='bg-black px-3 h-10 justify-center flex-1'>
          <Text className='text-white text-center font-sans text-base'>GR</Text>
        </View>
      </View>

      <View className='flex flex-row justify-betweene'>
        <View className='px-5 h-10 justify-center w-31'>
          <Text className='text-black text-center text-base font-semibold'>Objetivo</Text>
        </View>
        <View className='justify-center' style={{width:'20%'}}>
        <Text className='text-black text-center font-semibold text-base'>1234</Text>
        </View>
        <View className='px-5 h-10 justify-center flex-1'>
        <Text className='text-black text-center font-semibold text-base'>156</Text>
        </View>
        <View className='px-5 h-10 justify-center flex-1'>
        <Text className='text-black text-center font-semibold text-base'>345</Text>
        </View>
        <View className=' px-5 h-10 justify-center flex-1'>
        <Text className='text-black text-center font-semibold text-base'>56</Text>
        </View>
      </View>

      <View className='flex flex-row justify-betweene'>
        <View className='px-5 h-10 justify-center w-31'>
          <Text className='text-black text-center text-base font-semibold'>Totales<Text className='text-white'>_</Text></Text>
        </View>
        <View className='justify-center' style={{width:'20%'}}>
        <Text className='text-black text-center font-semibold text-base'>1234</Text>
        </View>
        <View className='px-5 h-10 justify-center flex-1'>
        <Text className='text-black text-center font-semibold text-base'>156</Text>
        </View>
        <View className='px-5 h-10 justify-center flex-1'>
        <Text className='text-black text-center font-semibold text-base'>345</Text>
        </View>
        <View className=' px-5 h-10 justify-center flex-1'>
        <Text className='text-black text-center font-semibold text-base'>56</Text>
        </View>
      </View>

      <View className='flex flex-row justify-betweene'>
        <View className='px-5 h-10 justify-center w-31'>
          <Text className='text-black text-center text-base font-semibold'>Restan<Text className='text-white'>..</Text></Text>
        </View>
        <View className='justify-center' style={{width:'20%'}}>
        <Text className='text-black text-center font-semibold text-base'>1234</Text>
        </View>
        <View className='px-5 h-10 justify-center flex-1'>
        <Text className='text-black text-center font-semibold text-base'>156</Text>
        </View>
        <View className='px-5 h-10 justify-center flex-1'>
        <Text className='text-black text-center font-semibold text-base'>345</Text>
        </View>
        <View className=' px-5 h-10 justify-center flex-1'>
        <Text className='text-black text-center font-semibold text-base'>56</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      left: 0,
      backgroundColor: '#ffffff',
      zIndex: 2, // Asegura que containerB esté por encima de containerA
      elevation: 2,
      // Shadow for iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
  });
  