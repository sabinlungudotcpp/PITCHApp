import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import MainStackNavigator from './navigation/StackNavigator';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <MainStackNavigator>
          <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <HomeScreen/>
            </Drawer.Navigator>
       
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