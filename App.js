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
  androidSize: 40,
  iosSize: 57,
  tabScreenSize: 26
}

const TAB_SIZES = {
  marginBottom: 18,
  paddingTop: -5,
}

const BottomTabs = () => { // Bottom Tab navigator component

    return <Tab.Navigator labeled = {true} shifting = {true} initialRouteName = "Home" barStyle = {{backgroundColor: Colors.primaryColor, height: Platform.OS === 'android' ? SIZES.androidSize : SIZES.iosSize, marginBottom: TAB_SIZES.marginBottom, paddingTop: TAB_SIZES.paddingTop}}>
        <Tab.Screen shifting = {true} options = {{tabBarLabel: 'Home', tabBarIcon: (color) => <MaterialCommunityIcons style = {style.homeIcon} color = {color} name = "account" size = {SIZES.tabScreenSize}/>}} name = "Home" component = {HomeNavigator}/>
        <Tab.Screen options = {{title: 'Slum Soccer', tabBarIcon: (color) => <MaterialCommunityIcons style = {style.soccerIcon} color = {color} name = "soccer" size = {SIZES.tabScreenSize} /> }} name = "Slum Soccer" component = {SlumSoccerStackNavigator} />
        <Tab.Screen options = {{title: 'Street Soccer', tabBarColor: '#2e86de', tabBarIcon: (color) => <MaterialCommunityIcons style = {style.soccerIcon} color = {color} name = "football" size = {SIZES.tabScreenSize} />}} name = "Street Soccer" component = {StreetSoccerNavigator} />
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