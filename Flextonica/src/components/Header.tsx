import React from 'react';
import { View, Image } from 'react-native';
import avatar from './../../assets/avatar.png';
import Ionicons from '@expo/vector-icons/Ionicons';

import { DatePickerSemanal } from './DatePickerSemanal';
import { DatePickerDiario } from './DatePickerDiario';

interface HeaderProps {
  props: string;
}

export const Header: React.FC<HeaderProps> = ({props}) => {
  return (
    <View className='flex flex-row items-center justify-between px-5 py-3 bg-white'>
      {props === 'semanal' ?
       (<>
         <Image source={avatar} style={{ width: 24, height: 24 }} />
            <DatePickerSemanal />
          <Ionicons name="notifications" size={18} color="black" />
       </>) 
       :
        (<>
          <Image source={avatar} style={{ width: 24, height: 24 }} />
            <DatePickerDiario />
          <Ionicons name="notifications" size={18} color="black" />
        </>)}
    </View>
  );
};

