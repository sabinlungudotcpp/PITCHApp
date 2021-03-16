import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import EstablishHomeScreen from '../screens/establish_street_soccer/EstablishHomeScreen';
import Colors from '../constants/Colors';
import SessionsPartnershipsScreen from '../screens/establish_street_soccer/SessionsPartnershipsScreen';

const Stack = createStackNavigator();

const StreetSoccerNavigator = ({navigation}) => { // Street Soccer Stack Navigator
    return <Stack.Navigator>

    <Stack.Screen options = { {headerTintColor: Colors.black, headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = "#fff" />), headerLeft: () => (<Button onPress={() => {}} title = "Modules"
              color = {Colors.whiteColor}/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.secondaryColor}}} name = "EstablishHomeScreen" component = {EstablishHomeScreen}/>

<Stack.Screen options = { {headerTintColor: Colors.black, headerRight: () => (<Button onPress = {() => navigation.navigate('Register')} title = "Register" color = "#fff" />), headerLeft: () => (<Button onPress={() => {}} title = "Modules"
              color = {Colors.whiteColor}/>) , headerTitle: 'Street Soccer', headerStyle: {backgroundColor: Colors.secondaryColor}}} name = "SessionsPartnershipsScreen" component = {SessionsPartnershipsScreen}/>
    </Stack.Navigator>
}

export default StreetSoccerNavigator