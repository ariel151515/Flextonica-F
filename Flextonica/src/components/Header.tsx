import React from 'react';
import { View, Image } from 'react-native';
import { DatePicker } from './DatePicker';
import avatar from './../../assets/avatar.png';
import Ionicons from '@expo/vector-icons/Ionicons';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <View className='flex flex-row items-center justify-between px-5 py-3 bg-white'>
      <Image source={avatar} style={{ width: 28, height: 28 }} />
      <DatePicker />
      <Ionicons name="notifications" size={18} color="black" />
    </View>
  );
};

