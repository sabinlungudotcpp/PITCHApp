import React, {useState} from 'react';
import {StyleSheet, Platform} from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigator from './navigation/StackNavigator';
import SlumSoccerStackNavigator from './navigation/SlumSoccerStackNavigator';
import StreetSoccerNavigator from './navigation/StreetSoccerNavigator';
import Colors from './constants/Colors';

const Tab = createMaterialBottomTabNavigator();

const SIZES = {
  androidSize: 33,
  iosSize: 57,
  tabScreenSize: 26
}

const TAB_SIZES = {
  marginBottom: 20,
  paddingTop: -14,
  paddingBottom: 10
}

const BottomTabs = () => { // Bottom Tab navigator component

    return <Tab.Navigator activeColor = "red" labeled = {true} shifting = {true} initialRouteName = "Home" barStyle = {{backgroundColor: Colors.primaryColor, height: Platform.OS === 'android' ? SIZES.androidSize : SIZES.iosSize, paddingBottom: Platform.OS === 'android' ? TAB_SIZES.paddingBottom : TAB_SIZES.paddingBottom, marginBottom: TAB_SIZES.marginBottom, paddingTop: TAB_SIZES.paddingTop}}>
        <Tab.Screen shifting = {true} options = {{tabBarLabel: 'Home', tabBarIcon: (color) => <MaterialCommunityIcons style = {style.homeIcon} color = {color} name = "account" size = {SIZES.tabScreenSize}/>}} name = "Home" component = {HomeNavigator}/>
        <Tab.Screen options = {{title: 'Slum Soccer', tabBarIcon: (color) => <MaterialCommunityIcons style = {style.soccerIcon} color = {color} name = "soccer" size = {SIZES.tabScreenSize} /> }} name = "Slum Soccer" component = {SlumSoccerStackNavigator} />
        <Tab.Screen options = {{title: 'Street Soccer', tabBarColor: Colors.secondaryColor, tabBarIcon: (color) => <MaterialCommunityIcons style = {style.footballIcon} color = {color} name = "football" size = {Platform.OS === 'android' ? SIZES.tabScreenSize : SIZES.tabScreenSize} />}} name = "Street Soccer" component = {StreetSoccerNavigator} />
    </Tab.Navigator>
}

const style = StyleSheet.create({
  
  homeIcon: {
    fontSize: 28.9,
    top: -3,
    marginTop: -1
  },

  soccerIcon: {
    fontSize: 28.9,
    top: -1,
    marginBottom: -1,
    marginRight: -1,
    textAlign: 'center',
    marginTop: -1,
  },

  footballIcon: {
    fontSize: 28.9,
    top: -1,
    marginBottom: -1,
    marginRight: -1,
    textAlign: 'center',
    marginTop: -1,
  }
})

const App = () => {
  
  return (

    <NavigationContainer>
     <BottomTabs/>
 
    </NavigationContainer>
  
  );
}

export default App;