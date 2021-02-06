import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/StackNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
          <MainStackNavigator>
        <DrawerNavigator>

        </DrawerNavigator>
          
      </MainStackNavigator>
    
   
    </NavigationContainer>
     
  );
}
