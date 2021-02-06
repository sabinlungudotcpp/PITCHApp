import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import BottomNavigation from './navigation/BottomNavigation';
import MainStackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
           <MainStackNavigator>
             <BottomNavigation>
               <Text>AFHHAFHAFH</Text>
             </BottomNavigation>
        <HomeScreen/>
      </MainStackNavigator>
    
   
    </NavigationContainer>
     
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