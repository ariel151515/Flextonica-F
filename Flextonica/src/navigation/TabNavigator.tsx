import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DiarioScreen from '../screen/DiarioScreen';
import SemanalScreen from '../screen/SemanalScreen';
import MenuScreen from '../screen/MenuScreen';
import NutricionScreen from '../screen/NutricionScreen';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Diario') {
            iconName = focused ? 'calendar-today' : 'calendar-blank';
          } else if (route.name === 'Semanal') {
            iconName = focused ? 'calendar-week' : 'calendar-blank-outline';
          } else if (route.name === 'Nutricion') {
            iconName = focused ? 'nutrition' : 'food';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'menu' : 'menu-open';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ fontSize: 12, color: color, paddingTop: 0 }}>
            {route.name}
          </Text>
        ),
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#A7CFFF',
        tabBarStyle: {
          backgroundColor: '#107EFF',
          height: 60, // Ajusta la altura de la barra de navegación
          paddingBottom: 10, // Ajusta el espaciado inferior para que los iconos estén centrados verticalmente
          paddingTop:6
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Diario" component={DiarioScreen} />
      <Tab.Screen name="Semanal" component={SemanalScreen} />
      <Tab.Screen name="Nutricion" component={NutricionScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
