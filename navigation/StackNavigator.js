import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Modules from '../screens/ModulesScreen';
import {CustomHeaderButtons, Item} from '../components/CustomHeaderButton';

const Stack = createStackNavigator();

const StackNavigator = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen options = {{headerTintColor: 'black', headerLeft: () => (<CustomHeaderButtons navigate = {navigation.navigate}>
            <Item title = "View Modules" onPress = {() => {navigation.navigate('Modules')}}/>
    </CustomHeaderButtons>), headerTitle: 'PITCH', headerStyle: {backgroundColor: '#F7B500'}}} name = "Back" component = {HomeScreen}/>
    
            <Stack.Screen options = {{headerTintColor: 'black', headerStyle: {backgroundColor: '#F7B500'}}} name = "Register" component = {RegisterScreen}/>
            <Stack.Screen options = {{headerTintColor: 'black', headerStyle: {backgroundColor: '#F7B500'}}} name = "Login" component = {LoginScreen}/>
            <Stack.Screen options = {{headerTintColor: 'black', headerStyle: {backgroundColor: '#F7B500'}}} name = "Modules" component = {Modules} />
        </Stack.Navigator>
    )
}

export default StackNavigator;