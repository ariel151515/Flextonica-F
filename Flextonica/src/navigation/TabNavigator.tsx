import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DiarioScreen from '../screen/DiarioScreen';
import SemanalScreen from '../screen/SemanalScreen';
import MenuScreen from '../screen/MenuScreen';
import NutricionScreen from '../screen/NutricionScreen'; // Importa la nueva pantalla

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Diario" 
        component={DiarioScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons 
              name="calendar-today" 
              size={size} 
              color={color} 
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 12, marginBottom: 0, color: color, marginTop: 0 }}>
              Diario
            </Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Semanal" 
        component={SemanalScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons 
              name="calendar-week" 
              size={size} 
              color={color} 
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 12, marginBottom: 0, color: color, marginTop: 0 }}>
              Semanal
            </Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Nutricion" 
        component={NutricionScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons 
              name="nutrition" 
              size={size} 
              color={color} 
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 12, marginBottom: 0, color: color, marginTop: 0 }}>
              Nutrición
            </Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Menu" 
        component={MenuScreen} 
        options={{ 
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons 
              name="menu" 
              size={size} 
              color={color} 
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 12, marginBottom: 0, color: color, marginTop: 0 }}>
              Menú
            </Text>
          ),
          headerShown: false 
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
