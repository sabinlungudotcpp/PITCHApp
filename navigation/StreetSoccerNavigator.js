import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import EstablishHomeScreen from '../screens/establish_street_soccer/EstablishHomeScreen';
import Colors from '../constants/Colors';
import SessionsPartnershipsScreen from '../screens/establish_street_soccer/SessionsPartnershipsScreen';
import CoachesRecruitmentScreen from '../screens/establish_street_soccer/CoachesRecruitmentScreen';
import EstablishFundingScreen from '../screens/establish_street_soccer/EstablishFundingScreen';
import EstablishFinalScreen from '../screens/establish_street_soccer/EstablishFinalScreen';

/**
 * @fileoverview: 
 * @author: Sabin Constantin Lungu
 * @param {navigation}: navigation: prop parameter used to pass data between components (if required)
 * @component CoachesRecruitmentScreen(): 
 * @requires: npm install 
 * @module: Card component module that is rendered throughout the screen to store a list of JSON data rendered from the file import above.
 */

const Stack = createStackNavigator(); // Creates the stack navigator

const StreetSoccerNavigator = ({navigation}) => { // Street Soccer Stack Navigator
    return <Stack.Navigator>

    <Stack.Screen options = { {headerTintColor: Colors.black, headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = "#fff" />), headerLeft: () => (<Button onPress={() => {}} title = "Modules"
              color = {Colors.whiteColor}/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.secondaryColor}}} name = "EstablishHomeScreen" component = {EstablishHomeScreen}/>

    <Stack.Screen options = { {headerTintColor: Colors.black, headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = "#fff" />), headerLeft: () => (<Button onPress={() => {}} title = "Modules"
              color = {Colors.whiteColor}/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.secondaryColor}}} name = "SessionsPartnershipsScreen" component = {SessionsPartnershipsScreen}/>

    <Stack.Screen options = { {headerTintColor: Colors.black, headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = "#fff" />), headerLeft: () => (<Button onPress={() => {}} title = "Modules"
                color = {Colors.whiteColor}/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.secondaryColor}}} name = "CoachesRecruitmentScreen" component = {CoachesRecruitmentScreen}/>

    <Stack.Screen options = { {headerTintColor: Colors.black, headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = "#fff" />), headerLeft: () => (<Button onPress={() => {}} title = "Modules"
                color = {Colors.whiteColor}/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.secondaryColor}}} name = "EstablishFundingScreen" component = {EstablishFundingScreen}/>

<Stack.Screen options = { {headerTintColor: Colors.black, headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = "#fff" />), headerLeft: () => (<Button onPress={() => {}} title = "Modules"
                color = {Colors.whiteColor}/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.secondaryColor}}} name = "EstablishFinalScreen" component = {EstablishFinalScreen}/>
    </Stack.Navigator>
}

export default StreetSoccerNavigator