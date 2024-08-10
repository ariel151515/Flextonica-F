import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface BoxSemanalProps {}

export const BoxSemanal: React.FC<BoxSemanalProps> = () => {
  return (
    <View className='shadow bg-white' style={styles.container}>

      <View className='flex flex-row justify-between bg-black'>
        <View className='bg-azulSecundario pt-2 ' style={{width:'24%', paddingLeft:20}}>
          <TextInput editable={false}>
             <Text className='font-sans text-sm text-black font-semibold pl-5'>Diario</Text>
          </TextInput>
        </View>
        <View className='bg-azulPrimario px-4 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
             <Text className='font-sans text-sm text-white text-center'>KCAL</Text>
          </TextInput>
        </View>
        <View className='bg-azulPrimario px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
              <Text className='font-sans text-sm text-white text-center'>PR</Text>
          </TextInput>
        </View>
        <View className='bg-azulPrimario px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
             <Text className='font-sans text-sm text-white text-center'>CH</Text>
          </TextInput>
        </View>
        <View className='bg-azulPrimario px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
              <Text className='font-sans text-sm text-white text-center'>GR</Text>
          </TextInput>
        </View>
      </View>

      <View className='flex flex-row justify-between bg-black'>
        <View className='bg-white pt-2 ' style={{width:'24%', paddingLeft:20}}>
          <TextInput editable={false}>
             <Text className='text-black font-semibold text-sm pl-5'>Objetivo</Text>
          </TextInput>
        </View>
        <View className='bg-white px-4 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
             <Text className='text-black text-center font-semibold text-sm'>1340</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
              <Text className='text-black text-center font-semibold text-sm'>120</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
             <Text className='text-black text-center font-semibold text-sm'>345</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
              <Text className='text-black text-center font-semibold text-sm'>58</Text>
          </TextInput>
        </View>
      </View>
    
      <View className='flex flex-row justify-between bg-black'>
        <View className='bg-white pt-2 ' style={{width:'24%', paddingLeft:20}}>
          <TextInput editable={false}>
             <Text className='text-black font-semibold text-sm pl-5'>Totales</Text>
          </TextInput>
        </View>
        <View className='bg-white px-4 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
             <Text className='text-black text-center font-sans text-sm'>1340</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
              <Text className='text-black text-center font-sans text-sm'>120</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
             <Text className='text-black text-center font-sans text-sm'>345</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
              <Text className='text-black text-center font-sans text-sm'>58</Text>
          </TextInput>
        </View>
      </View>

       <View className='flex flex-row justify-between bg-black'>
        <View className='bg-white pt-2 ' style={{width:'24%', paddingLeft:20}}>
          <TextInput editable={false}>
             <Text className='text-black font-semibold text-sm pl-5'>Restantes</Text>
          </TextInput>
        </View>
        <View className='bg-white px-4 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
             <Text className='text-black text-center font-sans text-sm'>1340</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
              <Text className='text-black text-center font-sans text-sm'>120</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
             <Text className='text-black text-center font-sans text-sm'>345</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}} editable={false}>
              <Text className='text-black text-center font-sans text-sm'>58</Text>
          </TextInput>
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
  