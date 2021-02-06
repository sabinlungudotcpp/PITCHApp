import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import MainStackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
          <MainStackNavigator>
       
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