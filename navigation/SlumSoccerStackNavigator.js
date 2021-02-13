import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SlumSoccerHome from '../screens/SlumSoccerHome';
import ChildProtectionScreen from '../screens/ChildProtectionScreen';

const Stack = createStackNavigator(); // Creates a stack navigator

const SlumSoccerStackNavigator = ({navigation}) => {
    return <Stack.Navigator>
        <Stack.Screen options = { {headerTintColor: 'black', headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>), headerRight: () => (<Button onPress={() => navigation.navigate('Register')} title = "Register"
              color="#fff"/>), headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "Back" component = {SlumSoccerHome}/>

<Stack.Screen options = { {headerTintColor: 'black', headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "ChildProtectionScreen" component = {ChildProtectionScreen}/>
    </Stack.Navigator>
    
}

export default SlumSoccerStackNavigator;