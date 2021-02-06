import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native'; // Determines which platform is used (Android / iOS)
import HomeScreen from '../screens/HomeScreen'; // Import the Product Overview Screen
import ChildProtection from '../screens/ChildProtectionHomeScreen';

const screens = {
    SlumSoccer: {
        screen: ChildProtection,
        navigationOptions: {
            title: 'Child Protection Screen'
        }
    }
}

const HomeNavigator = createStackNavigator(screens, {
    HomeScreen: HomeScreen,
    RegisterScreen: RegisterScreen,
    LoginScreen: LoginScreen
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

export default HomeNavigator;