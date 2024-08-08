import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface BoxDiarioProps {}

export const BoxDiario: React.FC<BoxDiarioProps> = () => {
  return (
    <View className='shadow bg-white' style={styles.container}>

      <View className='flex flex-row justify-between bg-black'>
        <View className='bg-amarillo pt-2 ' style={{width:'24%', paddingLeft:20}}>
          <TextInput>
             <Text className='text-blak font-semibold text-base pl-5'>Diario</Text>
          </TextInput>
        </View>
        <View className='bg-black px-4 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
             <Text className='text-white text-center font-sans text-base'>KCAL</Text>
          </TextInput>
        </View>
        <View className='bg-black px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
              <Text className='text-white text-center font-sans text-base'>PR</Text>
          </TextInput>
        </View>
        <View className='bg-black px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
             <Text className='text-white text-center font-sans text-base'>CH</Text>
          </TextInput>
        </View>
        <View className='bg-black px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
              <Text className='text-white text-center font-sans text-base'>GR</Text>
          </TextInput>
        </View>
      </View>

      <View className='flex flex-row justify-between bg-black'>
        <View className='bg-white pt-2 ' style={{width:'24%', paddingLeft:20}}>
          <TextInput>
             <Text className='text-blak font-semibold text-base pl-5'>Objetivo</Text>
          </TextInput>
        </View>
        <View className='bg-white px-4 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
             <Text className='text-blak text-center font-semibold text-base'>1340</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
              <Text className='text-blak text-center font-semibold text-base'>120</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
             <Text className='text-blak text-center font-semibold text-base'>345</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
              <Text className='text-blak text-center font-semibold text-base'>58</Text>
          </TextInput>
        </View>
      </View>
    
      <View className='flex flex-row justify-between bg-black'>
        <View className='bg-white pt-2 ' style={{width:'24%', paddingLeft:20}}>
          <TextInput>
             <Text className='text-blak font-semibold text-base pl-5'>Totales</Text>
          </TextInput>
        </View>
        <View className='bg-white px-4 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
             <Text className='text-blak text-center font-sans text-base'>1340</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
              <Text className='text-blak text-center font-sans text-base'>120</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
             <Text className='text-blak text-center font-sans text-base'>345</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
              <Text className='text-blak text-center font-sans text-base'>58</Text>
          </TextInput>
        </View>
      </View>

       <View className='flex flex-row justify-between bg-black'>
        <View className='bg-white pt-2 ' style={{width:'24%', paddingLeft:20}}>
          <TextInput>
             <Text className='text-blak font-semibold text-base pl-5'>Restantes</Text>
          </TextInput>
        </View>
        <View className='bg-white px-4 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
             <Text className='text-blak text-center font-sans text-base'>1340</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
              <Text className='text-blak text-center font-sans text-base'>120</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
             <Text className='text-blak text-center font-sans text-base'>345</Text>
          </TextInput>
        </View>
        <View className='bg-white px-3 h-10 justify-center flex-1'>
          <TextInput style={{marginLeft:10}}>
              <Text className='text-blak text-center font-sans text-base'>58</Text>
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
  