import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainStackNavigator from './navigation/StackNavigator';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import { createAppContainer } from 'react-navigation';

const Drawer = createDrawerNavigator({
  HomeScreen: HomeScreen,
  RegisterScreen: RegisterScreen
}, {
  initialRouteName: 'HomeScreen'
});

const App2 = createAppContainer(Drawer);

export default function App() {
  return (
    <NavigationContainer>
          <MainStackNavigator>
       <App2/> 
      </MainStackNavigator>
    
   
    </NavigationContainer>
     
  );
}
