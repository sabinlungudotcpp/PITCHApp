import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Register from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return <Stack.Navigator>
        <Stack.Screen name = "PITCH" component = {HomeScreen}/>

        <Stack.Screen name = "Register" component = {Register}/>
    </Stack.Navigator>
}

export default HomeNavigator;