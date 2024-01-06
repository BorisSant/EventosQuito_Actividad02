import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cartelera from './Cartelera';
import MostrarEventos from './MostrarEventos';


const Tab = createMaterialBottomTabNavigator();

export default function Home() {
 return (
  
<Tab.Navigator
        initialRouteName="MostrarEventos"
        activeColor="black" // Color activo
        inactiveColor="gray"  // Color inactivo
        barStyle={{ backgroundColor: '#CCCCCC' }}
        >
        <Tab.Screen name="MostrarEventos" 
        component={MostrarEventos} 
        options={{
            tabBarLabel: 'Eventos',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Cartelera"
        component={Cartelera} 
        options={{
            tabBarLabel: 'Cartelera',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
    </Tab.Navigator>

  );
}
