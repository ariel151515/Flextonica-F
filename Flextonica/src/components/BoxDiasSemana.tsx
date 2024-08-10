import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';


// Define el tipo para las propiedades del componente `BoxAgua`
interface BoxDiasSemanaProps {}

// Componente `BoxAgua`
export const BoxDiasSemana: React.FC<BoxDiasSemanaProps> = () => {
  return (
    <View className='flex w-full bg-white mt-2' style={styles.container}>
        <View className='bg-grisClaro w-full flex-row justify-between py-4 px-5'>
            <Text className='font-sans text-base font-bold'>Vista semanal</Text>
            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={18} color="#DBD9D9" />
            </TouchableOpacity>
        </View>

        {/* ----------------------------------------Martes------------------------------------- */}
        <View className='flex flex-row justify-between bg-black'>
            <View className='bg-azulSecundario p-2' style={{width:'24%', paddingLeft:20}}>
            <TouchableOpacity>
                 <TextInput editable={false}>
                  <Text className='font-sans text-sm text-black font-semibold pl-5'>Lunes</Text>
                </TextInput>
            </TouchableOpacity>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>1456</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>100</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>234</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>56</Text>
              </TextInput>
            </View>
        </View>
     {/* ----------------------------------------------------------------------------------- */}


       {/* ----------------------------------------Martes------------------------------------- */}
       <View className='flex flex-row justify-between bg-black'>
            <View className='bg-azulSecundario p-2' style={{width:'24%', paddingLeft:20}}>
            <TouchableOpacity>
                 <TextInput editable={false}>
                  <Text className='font-sans text-sm text-black font-semibold pl-5'>Martes</Text>
                </TextInput>
            </TouchableOpacity>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>1456</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>100</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>234</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>56</Text>
              </TextInput>
            </View>
        </View>
     {/* ----------------------------------------------------------------------------------- */}


  {/* ----------------------------------------Miercoles------------------------------------- */}
  <View className='flex flex-row justify-between bg-black'>
            <View className='bg-azulSecundario p-2' style={{width:'24%', paddingLeft:20}}>
            <TouchableOpacity>
                 <TextInput editable={false}>
                  <Text className='font-sans text-sm text-black font-semibold pl-5'>Miercoles</Text>
                </TextInput>
            </TouchableOpacity>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>1456</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>100</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>234</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>56</Text>
              </TextInput>
            </View>
        </View>
     {/* ----------------------------------------------------------------------------------- */}


  {/* ----------------------------------------Jueves------------------------------------- */}
  <View className='flex flex-row justify-between bg-black'>
            <View className='bg-azulSecundario p-2' style={{width:'24%', paddingLeft:20}}>
            <TouchableOpacity>
                 <TextInput editable={false}>
                  <Text className='font-sans text-sm text-black font-semibold pl-5'>Jueves</Text>
                </TextInput>
            </TouchableOpacity>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>1456</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>100</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>234</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>56</Text>
              </TextInput>
            </View>
        </View>
     {/* ----------------------------------------------------------------------------------- */}


  {/* ----------------------------------------Viernes------------------------------------- */}
  <View className='flex flex-row justify-between bg-black'>
            <View className='bg-azulSecundario p-2' style={{width:'24%', paddingLeft:20}}>
            <TouchableOpacity>
                 <TextInput editable={false}>
                  <Text className='font-sans text-sm text-black font-semibold pl-5'>Viernes</Text>
                </TextInput>
            </TouchableOpacity>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>1456</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>100</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>234</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>56</Text>
              </TextInput>
            </View>
        </View>
     {/* ----------------------------------------------------------------------------------- */}


  {/* ----------------------------------------Sabado------------------------------------- */}
  <View className='flex flex-row justify-between bg-black'>
            <View className='bg-azulSecundario p-2' style={{width:'24%', paddingLeft:20}}>
            <TouchableOpacity>
                 <TextInput editable={false}>
                  <Text className='font-sans text-sm text-black font-semibold pl-5'>Sabado</Text>
                </TextInput>
            </TouchableOpacity>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>1456</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>100</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>234</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>56</Text>
              </TextInput>
            </View>
        </View>
     {/* ----------------------------------------------------------------------------------- */}


  {/* ----------------------------------------Domingo------------------------------------- */}
  <View className='flex flex-row justify-between bg-black'>
            <View className='bg-azulSecundario p-2' style={{width:'24%', paddingLeft:20}}>
            <TouchableOpacity>
                 <TextInput editable={false}>
                  <Text className='font-sans text-sm text-black font-semibold pl-5'>Domingo</Text>
                </TextInput>
            </TouchableOpacity>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>1456</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>100</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                <Text className='font-sans text-sm text-black text-center'>234</Text>
              </TextInput>
            </View>
            <View className='bg-white px-4 justify-center flex-1'>
              <TextInput style={{marginLeft:10}} editable={false}>
                  <Text className='font-sans text-sm text-black text-center'>56</Text>
              </TextInput>
            </View>
        </View>
     {/* ----------------------------------------------------------------------------------- */}


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
    marginBottom:20
  },
});
