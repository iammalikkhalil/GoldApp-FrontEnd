import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Disclaimer from './src/components/Disclaimer'
import DashboardCard from './src/components/DashboardCard'
import Dashboard from './src/screens/Dashboard';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="DashboardCard" component={DashboardCard} />
        <Stack.Screen name="Disclaimer" component={Disclaimer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
