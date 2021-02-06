import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import Navigator from './navigation/StackNavigator';
import BottomNavigation from './navigation/BottomNavigation';


export default function App() {
  return (

     <BottomNavigation>

    <HomeScreen/>
  </BottomNavigation>
       
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});