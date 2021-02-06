import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import ChildProtectionHomeScreen from '../screens/ChildProtectionHomeScreen';
import HomeScreen from '../screens/HomeScreen';

const TabNavigator = createBottomTabNavigator();

const Tabs = ({}) => {

    return (
       <NavigationContainer>
           <TabNavigator.Screen name = "Home" component = {HomeScreen} />
           <TabNavigator.Screen name = "Slum Soccer" component = {ChildProtectionHomeScreen}/>
       </NavigationContainer>
    )
}

export default Tabs;