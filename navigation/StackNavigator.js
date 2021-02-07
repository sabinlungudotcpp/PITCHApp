import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options = {{headerTintColor: 'black', headerStyle: {backgroundColor: '#F7B500'}}} name = "PITCH" component = {HomeScreen}/>
            <Stack.Screen options = {{headerTintColor: 'black', headerStyle: {backgroundColor: '#F7B500'}}} name = "RegisterScreen" component = {RegisterScreen}/>
            <Stack.Screen options = {{headerTintColor: 'black', headerStyle: {backgroundColor: '#F7B500'}}} name = "LoginScreen" component = {LoginScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;