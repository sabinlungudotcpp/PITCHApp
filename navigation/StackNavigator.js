import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ModulesScreen from '../screens/ModulesScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import ChildProtectionScreen from '../screens/ChildProtectionScreen';
import Colors from '../constants/Colors';
import ShaktiFellowshipScreen from '../screens/ShaktiFellowshipScreen';
import EdukickScreen from '../screens/EdukickScreen';
import EduKickMoreScreen from '../screens/EduKickMoreScreen';
import EstablishHomeScreen from '../screens/establish_street_soccer/EstablishHomeScreen';
import EduKickPropositionScreen from '../screens/EduKickPropositionScreen';
import EduProgramActivities from '../screens/EduProgramActivities';
import EduChildrenProfile from '../screens/EduChildrenProfile';

const Stack = createStackNavigator(); // Creates a stack navigator

const StackNavigator = ({navigation}) => { // Stack Navigator Component
    return (
        <Stack.Navigator>
            <Stack.Screen options = { {headerTintColor: Colors.black, headerLeft: () => (<Button onPress={() => navigation.navigate('AboutUsScreen')} title = "About Us"
              color = "#fff"/>) , headerTitle: 'PITCH', headerStyle: {backgroundColor: Colors.primaryColor}}} name = "Back" component = {HomeScreen}/>
    
            <Stack.Screen options = {{title: 'PITCH', headerTintColor: Colors.black, headerLeft: () => (<Button onPress = {() => navigation.navigate('AboutUsScreen')}
            title = "About Us" color = '#fff'/>), headerStyle: {backgroundColor: Colors.primaryColor}}} name = "Register" component = {RegisterScreen}/>

            <Stack.Screen options = {{title: 'PITCH', headerTintColor: Colors.black, headerLeft: () => (<Button onPress = {() => navigation.navigate('ModulesScreen')}
            title = "" color = '#fff'/>), headerStyle: {backgroundColor: Colors.primaryColor}}} name = "Login" component = {LoginScreen}/>

            <Stack.Screen options = {{title: 'PITCH', headerTintColor: Colors.black, headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>) , headerTitle: 'PITCH', headerStyle: {backgroundColor: Colors.primaryColor}}} name = "ModulesScreen" component = {ModulesScreen} />
            <Stack.Screen options = {{title: 'PITCH', headerTintColor: Colors.black, headerLeft: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = '#fff' />) , headerStyle: {backgroundColor: '#F7B500'}}} name = "AboutUsScreen" component = {AboutUsScreen} />

            <Stack.Screen options = {{title: 'Slum Soccer', headerTintColor: Colors.black, headerRight: () => (<Button color = '#fff' title = "Register" onPress = {() => navigation.navigate('Register')} />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: Colors.primaryColor}}} name = "ChildProtectionScreen" component = {ChildProtectionScreen} />

            <Stack.Screen options = {{title: 'Slum Soccer', headerTintColor: Colors.black, headerRight: () => (<Button color = '#fff' title = "Register" onPress = {() => navigation.navigate('Register')} />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: Colors.primaryColor}}} name = "ShaktiFellowshipScreen" component = {ShaktiFellowshipScreen} />

            <Stack.Screen options = {{title: 'Slum Soccer', headerTintColor: Colors.black, headerRight: () => (<Button color = '#fff' title = "Register" onPress = {() => navigation.navigate('Register')} />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>) , headerTitle: 'Slum Soccer', headerStyle: {backgroundColor: Colors.primaryColor}}} name = "EdukickScreen" component = {EdukickScreen} />

            <Stack.Screen options = {{title: 'Slum Soccer', headerTintColor: Colors.black, headerRight: () => (<Button color = '#fff' title = "Register" onPress = {() => navigation.navigate('Register')} />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
              color="#fff"/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.primaryColor}}} name = "EstablishHomeScreen" component = {EstablishHomeScreen} />

          <Stack.Screen options = {{title: 'Slum Soccer', headerTintColor: Colors.black, headerRight: () => (<Button color = '#fff' title = "Register" onPress = {() => navigation.navigate('Register')} />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
                        color="#fff"/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.primaryColor}}} name = "EduKickMoreScreen" component = {EduKickMoreScreen} />

          <Stack.Screen options = {{title: 'Slum Soccer', headerTintColor: Colors.black, headerRight: () => (<Button color = '#fff' title = "Register" onPress = {() => navigation.navigate('Register')} />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
                        color="#fff"/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.primaryColor}}} name = "EduKickPropositionScreen" component = {EduKickPropositionScreen} />

          <Stack.Screen options = {{title: 'Slum Soccer', headerTintColor: Colors.black, headerRight: () => (<Button color = '#fff' title = "Register" onPress = {() => navigation.navigate('Register')} />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
                        color="#fff"/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.primaryColor}}} name = "EduProgramActivities" component = {EduProgramActivities} />

<Stack.Screen options = {{title: 'Slum Soccer', headerTintColor: Colors.black, headerRight: () => (<Button color = '#fff' title = "Register" onPress = {() => navigation.navigate('Register')} />), headerLeft: () => (<Button onPress={() => navigation.navigate('ModulesScreen')} title = "Modules"
                        color="#fff"/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.primaryColor}}} name = "EduChildrenProfile" component = {EduChildrenProfile} />

        </Stack.Navigator>
    )
}

export default StackNavigator; // Exportrs the stack navigator