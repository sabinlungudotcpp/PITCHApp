import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import {Platform} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ChildProtectionHomeScreen from '../screens/ChildProtectionHomeScreen';

const TabNavigator = createBottomTabNavigator();


const Tabs = () => {

    return <NavigationContainer>
        <TabNavigator.Navigator>
        <TabNavigator.Screen name = "Home" component = {HomeScreen} />
        <TabNavigator.Screen onPress = {() => navigation.navigate('LoginScreen')} name = "Slum Soccer" component = {ChildProtectionHomeScreen} />
        <TabNavigator.Screen name = "Street Soccer" component = {HomeScreen} />
    </TabNavigator.Navigator>
    </NavigationContainer>
}


export default Tabs;