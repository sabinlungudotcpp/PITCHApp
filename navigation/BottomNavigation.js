import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import {Platform} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const TabNavigator = createBottomTabNavigator();

const TabCustomBar = ({accessibilityState, children, onPress}) => {
    let isSelected = accessibilityState.isSelected;

    if(isSelected) {

    }

    else {
        return <View>

        </View>
    }
}

const Tabs = () => {

    return <NavigationContainer>
        <TabNavigator.Navigator>
        <TabNavigator.Screen name = "Slum Soccer" component = {HomeScreen} />
        <TabNavigator.Screen name = "Street Soccer" component = {HomeScreen} />
    </TabNavigator.Navigator>
    </NavigationContainer>
}


export default Tabs;