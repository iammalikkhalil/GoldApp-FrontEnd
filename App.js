import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import LiveRates from './src/screens/LiveRates';
import Insights from './src/screens/Insights';
import GoldCalculator from './src/screens/GoldCalculator';
import SilverCalculator from './src/screens/SilverCalculator';
import TradingGuide from './src/screens/TradingGuide';
import Rates from './src/components/Rates';
import Table from './src/components/Table';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Table" component={Table} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Rates" component={Rates} />
        <Stack.Screen name="LiveRates" component={LiveRates} />
        <Stack.Screen name="Insights" component={Insights} />
        <Stack.Screen name="GoldCalculator" component={GoldCalculator} />
        <Stack.Screen name="SilverCalculator" component={SilverCalculator} />
        <Stack.Screen name="TradingGuide" component={TradingGuide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
