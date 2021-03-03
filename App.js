import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigator from './navigation/StackNavigator';
import SlumSoccerStackNavigator from './navigation/SlumSoccerStackNavigator';

const Tab = createMaterialBottomTabNavigator(); // Creates the bottom tab navigator

const SIZES = {
  androidSize: 40,
  iosSize: 57,
  tabScreenSize: 26
}

const BottomTabs = () => { // Bottom Tab navigator component

    return <Tab.Navigator barStyle = {{backgroundColor: '#F7B500', height: Platform.OS === 'android' ? SIZES.androidSize : SIZES.iosSize, marginBottom: 20, paddingTop: 10,}}>
        <Tab.Screen options = {{tabBarLabel: 'Home', tabBarIcon: (color) => <MaterialCommunityIcons style = {style.homeIcon} color = {color} name = "account" size = {SIZES.tabScreenSize}/>}} name = "Home" component = {HomeNavigator}/>
        <Tab.Screen options = {{tabBarLabel: 'Slum Soccer', tabBarIcon: (color) => <MaterialCommunityIcons style = {style.soccerIcon} color = {color} name = "soccer" size = {SIZES.tabScreenSize} /> }} name = "Slum Soccer" component = {SlumSoccerStackNavigator} />
        <Tab.Screen options = {{tabBarLabel: 'Street Soccer', tabBarIcon: (color) => <MaterialCommunityIcons style = {style.soccerIcon} color = {color} name = "football" size = {SIZES.tabScreenSize} />}} name = "Street Soccer" component = {HomeNavigator} />
    </Tab.Navigator>
}

const style = StyleSheet.create({
  
  homeIcon: {
    fontSize: 27,
    top: -1,
    marginTop: -5
  },

  soccerIcon: {
    fontSize: 27,
    top: -3,
    marginTop: -1,
    marginRight: -1,
    textAlign: 'center'
  }
})

export default function App() {
  
  return (

    <NavigationContainer>
     <BottomTabs/>
 
    </NavigationContainer>
  
  );
}
