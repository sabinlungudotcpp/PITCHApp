import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeNavigator from './navigation/StackNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => { // Bottom Tab navigator component
    return <Tab.Navigator barStyle = {{backgroundColor: '#F7B500', height: 57, marginBottom: 35, paddingTop: 10,}}>
        <Tab.Screen options = {{tabBarLabel: 'Home', tabBarIcon: (color) => <MaterialCommunityIcons style = {style.homeIcon} color = {color} name = "account" size = {26}/>}} name = "Home" component = {HomeNavigator}/>
        <Tab.Screen options = {{tabBarLabel: 'Slum Soccer', tabBarIcon: (color) => <MaterialCommunityIcons style = {style.soccerIcon} color = {color} name = "soccer" size = {26} /> }} name = "Slum Soccer" component = {HomeNavigator} />
        <Tab.Screen name = "Street Soccer" component = {HomeNavigator} />
    </Tab.Navigator>
}

const style = StyleSheet.create({
  homeIcon: {
    fontSize: 27,
    top: -1
  },

  soccerIcon: {
    fontSize: 27,
    top: -1
  }
})

export default function App() {
  return (
    <NavigationContainer>
     <BottomTabs/>
      
    </NavigationContainer>
   
     
  );
}
