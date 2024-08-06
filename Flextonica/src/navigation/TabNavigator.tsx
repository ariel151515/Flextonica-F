import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DiarioScreen from '../screen/DiarioScreen'
import SemanalScreen from '../screen/SemanalScreen'
import MenuScreen from '../screen/MenuScreen'

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Diario" component={DiarioScreen} />
      <Tab.Screen name="Semanal" component={SemanalScreen} />
      <Tab.Screen name="Menu" component={MenuScreen}  options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

export default TabNavigator