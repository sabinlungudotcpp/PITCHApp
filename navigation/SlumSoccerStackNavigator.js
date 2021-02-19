import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SlumSoccerHome from '../screens/SlumSoccerHome';
import ChildProtectionScreen from '../screens/ChildProtectionScreen';
import IntroductionScreen from '../screens/IntroductionScreen';
import AimsScreen from '../screens/AimsScreen';
import GoodPracticeScreen from '../screens/GoodPracticeScreen';

const Stack = createStackNavigator(); // Creates a stack navigator

const SlumSoccerStackNavigator = ({navigation}) => {
    return <Stack.Navigator>
        <Stack.Screen options = { {headerTintColor: 'black', headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>), headerRight: () => (<Button onPress={() => navigation.navigate('Register')} title = "Register"
              color="#fff"/>), headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "Back" component = {SlumSoccerHome}/>

<Stack.Screen options = { {headerTintColor: 'black', headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "ChildProtectionScreen" component = {ChildProtectionScreen}/>

<Stack.Screen options = { {headerTintColor: 'black', headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "IntroductionScreen" component = {IntroductionScreen}/>

<Stack.Screen options = { {headerTintColor: 'black', headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "AimsScreen" component = {AimsScreen}/>

<Stack.Screen options = { {headerTintColor: 'black', headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color=  "#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: '#F7B500'}}} name = "GoodPracticeScreen" component = {GoodPracticeScreen}/>

    </Stack.Navigator>
    
}

export default SlumSoccerStackNavigator; // Exports the Slum Soccer Stack Navigator