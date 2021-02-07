import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './navigation/StackNavigator';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

const Tab = createBottomTabNavigator();
const DefaultTheme = () => {
  color: {
    primary: '#F7B500'
  }
}

const BottomTabs = () => {
    return <Tab.Navigator>
        <Tab.Screen name = "Slum Soccer" component = {HomeNavigator} />
        <Tab.Screen name = "Street Soccer" component = {HomeNavigator} />
    </Tab.Navigator>
}

export default function App() {
  return (
    <NavigationContainer theme = {DefaultTheme.primary}>
        <BottomTabs/>
    </NavigationContainer>
   
     
  );
}
