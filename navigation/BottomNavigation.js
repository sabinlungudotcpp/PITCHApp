import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import {Platform} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const TabNaigator = createBottomTabNavigator();

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
    return <TabNaigator.Navigator>
        <TabNaigator.Screen name = "Slum Soccer" component = {HomeScreen} />
        <TabNaigator.Screen name = "Street Soccer" component = {HomeScreen} />
    </TabNaigator.Navigator>
}



export default Tabs;