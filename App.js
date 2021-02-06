import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Navigator from './navigation/StackNavigator';


export default function App() {
  return (
     
    <Navigator>
      <HomeScreen/>
    </Navigator>
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