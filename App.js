import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeNavigator from './navigation/StackNavigator';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => { // Bottom Tab navigator component
    return <Tab.Navigator barStyle = {{backgroundColor: '#F7B500', height: 60, marginBottom: 20, paddingTop: -5}}>
        <Tab.Screen options = {{tabBarLabel: 'Home', tabBarIcon: (color) => <MaterialCommunityIcons color = {color} name = "account" size = {26}/>}} name = "Home" component = {HomeNavigator}/>
        <Tab.Screen name = "Slum Soccer" component = {HomeNavigator} />
        <Tab.Screen name = "Street Soccer" component = {HomeNavigator} />
    </Tab.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>
     <BottomTabs/>
      
    </NavigationContainer>
   
     
  );
}
