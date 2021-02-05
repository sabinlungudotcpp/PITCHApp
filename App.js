import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Navigator from './navigation/Navigation';

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