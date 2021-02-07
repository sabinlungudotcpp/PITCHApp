import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native'; // Determines which platform is used (Android / iOS)
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'; // Import the Product Overview Screen
import ChildProtection from '../screens/ChildProtectionHomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ModulesScreen from '../screens/ModulesScreen';

const HomeStack = createStackNavigator({
    HomeScreen: HomeScreen,
    RegisterScreen: RegisterScreen,
    LoginScreen: LoginScreen,
    ChildProtection: ChildProtection,
    ModulesScreen: ModulesScreen
}, {
    defaultNavigationOptions: {
        backgroundColor: 'transparent',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? 'white' : 'orange'
        },

        headerBackTitle: 'Back',
        headerTintColor: Platform.OS === 'android' ? 'white' : ''
    }
});

export default createAppContainer(HomeStack);