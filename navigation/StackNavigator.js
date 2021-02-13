import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ModulesScreen from '../screens/ModulesScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import ChildProtectionScreen from '../screens/ChildProtectionScreen';

const Stack = createStackNavigator(); // Creates a stack navigator

const StackNavigator = ({navigation}) => { // Stack Navigator Component
    return (
        <Stack.Navigator>
            <Stack.Screen options = { {headerTintColor: 'black', headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = ""
              color="#fff"/>) , headerTitle: 'PITCH', headerStyle: {backgroundColor: '#F7B500'}}} name = "Back" component = {HomeScreen}/>
    
            <Stack.Screen options = {{title: 'PITCH', headerTintColor: 'black', headerLeft: () => (<Button onPress = {() => navigation.navigate('ModulesScreen')}
            title = "" color = '#fff'/>), headerStyle: {backgroundColor: '#F7B500'}}} name = "Register" component = {RegisterScreen}/>

            <Stack.Screen options = {{title: 'PITCH', headerTintColor: 'black', headerLeft: () => (<Button onPress = {() => navigation.navigate('ModulesScreen')}
            title = "" color = '#fff'/>), headerStyle: {backgroundColor: '#F7B500'}}} name = "Login" component = {LoginScreen}/>

            <Stack.Screen options = {{title: 'PITCH', headerTintColor: 'black', headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>) , headerTitle: 'PITCH', headerStyle: {backgroundColor: '#F7B500'}}} name = "ModulesScreen" component = {ModulesScreen} />
            <Stack.Screen options = {{title: 'PITCH', headerTintColor: 'black', headerLeft: () => (<Button onPress = {() => navigation.navigate('ModulesScreen')} title = "" />) , headerStyle: {backgroundColor: '#F7B500'}}} name = "AboutUsScreen" component = {AboutUsScreen} />

            <Stack.Screen options = {{title: 'Slum Soccer', headerTintColor: 'black', headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>) , headerTitle: 'PITCH', headerStyle: {backgroundColor: '#F7B500'}}} name = "ChildProtectionScreen" component = {ChildProtectionScreen} />

        </Stack.Navigator>
    )
}

export default StackNavigator; // Exportrs the stack navigator