import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomHeaderButtons} from '../components/CustomHeaderButton';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Modules from '../screens/ModulesScreen';

const Stack = createStackNavigator(); // Creates a stack navigator

const StackNavigator = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen options = { {headerTintColor: 'black', headerLeft: () => (<Button onPress={() =>navigation.navigate('Register')}
              title="Modules"
              color="#fff"/>) , headerTitle: 'PITCH', headerStyle: {backgroundColor: '#F7B500'}}} name = "Back" component = {HomeScreen}/>
    
            <Stack.Screen options = {{title: 'PITCH', headerTintColor: 'black', headerLeft: () => (<Button onPress = {() => navigation.navigate('Register')}
            title = "Modules" color = '#fff'/>), headerStyle: {backgroundColor: '#F7B500'}}} name = "Register" component = {RegisterScreen}/>
            
            <Stack.Screen options = {{title: 'PITCH', headerTintColor: 'black', headerStyle: {backgroundColor: '#F7B500'}}} name = "Login" component = {LoginScreen}/>
            <Stack.Screen options = {{title: 'PITCH', headerTintColor: 'black', headerStyle: {backgroundColor: '#F7B500'}}} name = "Modules" component = {Modules} />
        </Stack.Navigator>
    )
}

export default StackNavigator; // Exportrs the stack navigator