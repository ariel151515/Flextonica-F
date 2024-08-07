import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Asegúrate de que la ruta de la imagen sea correcta
import avatar from './../../assets/avatar.png';

// Iconos
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

import { BtnCerrarSesion } from './../../src/utils/authService'

const MenuScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
          <View style={styles.container}>
            <View>
              <Image source={avatar} style={styles.avatar} />
            </View>
            <View style={styles.textContainer}>
              <Text className='text-white font-sans text-xl font-bold'>Hola Ariel</Text>
              <Text className='text-white font-sans text-base'>arielgentile89@gmail.com</Text>
            </View>
          </View>

          <View className='flex-1 pt-7'>
            <View className='gap-7 pb-10'>

                <View className='flex-row items-center pl-4'>
                      <View><AntDesign name="user" size={24} color="black" /></View>
                      <View><Text className='pl-4 font-sans text-lg font-semibold'>Mi perfil</Text></View>
                </View>

                <View className='flex-row items-center pl-4'>
                  <View><MaterialIcons name="calendar-today" size={24} color="black" /></View>
                  <View><Text className='pl-4 font-sans text-lg font-semibold'>Diario</Text></View>
                </View>

                <View className='flex-row items-center pl-4'>
                  <View><MaterialCommunityIcons name="calendar-week" size={24} color="black" /></View>
                  <View><Text className='pl-4 font-sans text-lg font-semibold'>Semanal</Text></View>
                </View>

                <View className='flex-row items-center pl-4'>
                  <View><FontAwesome5 name="nutritionix" size={24} color="black" /></View>
                  <View><Text className='pl-4 font-sans text-lg font-semibold'>Objetivos</Text></View>
                </View>

                <View className='flex-row items-center pl-4'>
                  <View><MaterialCommunityIcons name="nutrition" size={24} color="black" /></View>
                  <View><Text className='pl-4 font-sans text-lg font-semibold'>Nutricion</Text></View>
                </View>

                <View className='flex-row items-center pl-4'>
                  <View><Entypo name="database" size={24} color="black" /></View>
                  <View><Text className='pl-4 font-sans text-lg font-semibold'>Alimentos</Text></View>
                </View>

                <View className='flex-row items-center pl-4'>
                  <View><Ionicons name="analytics" size={24} color="black" /></View>
                  <View><Text className='pl-4 font-sans text-lg font-semibold'>Seguimiento</Text></View>
                </View>

                <View className='flex-row items-center pl-4'>
                  <View><AntDesign name="videocamera" size={24} color="black" /></View>
                  <View><Text className='pl-4 font-sans text-lg font-semibold'>Totoriales</Text></View>
                </View>

                <View className='flex-row items-center pl-4'>
                  <View><FontAwesome name="support" size={24} color="black" /></View>
                  <View><Text className='pl-4 font-sans text-lg font-semibold'>Soporte</Text></View>
                </View>

                <View className='flex-row items-center pl-4'>
                  <View><Feather name="settings" size={24} color="black" /></View>
                  <View><Text className='pl-4 font-sans text-lg font-semibold'>Configuracion</Text></View>
                </View>

                <TouchableOpacity onPress={BtnCerrarSesion}>
                    <View className='flex-row items-center pl-4'>
                      <View><Entypo name="login" size={24} color="#4F9AFF" /></View>
                      <View><Text className='pl-4 font-sans text-lg font-semibold text-azulPrimario'>Cerrar sesión</Text></View>
                    </View>
                </TouchableOpacity>

            </View>
          </View>
      </ScrollView>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF', // Asegúrate de que este color coincide con tu diseño
    paddingTop:32
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#086BEF', // Asumiendo que bg-azulPrimario es un azul
    width: '100%',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 16,
    paddingTop:20,
    paddingBottom:20
  }
});

export default MenuScreen;
