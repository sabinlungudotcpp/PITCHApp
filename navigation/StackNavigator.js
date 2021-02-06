import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native'; // Determines which platform is used (Android / iOS)
import HomeScreen from '../screens/HomeScreen'; // Import the Product Overview Screen
import ChildProtection from '../screens/ChildProtectionHomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import { createAppContainer } from 'react-navigation';

const HomeNavigator = createStackNavigator({
    HomeScreen: HomeScreen,
    RegisterScreen: RegisterScreen,
    LoginScreen: LoginScreen,
    ChildProtection: ChildProtection
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

export default createAppContainer(HomeNavigator);