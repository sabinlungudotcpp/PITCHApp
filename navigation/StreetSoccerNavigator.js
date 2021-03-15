import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import EstablishHomeScreen from '../screens/establish_street_soccer/EstablishHomeScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const StreetSoccerNavigator = ({navigation}) => {
    return <Stack.Navigator>
        <Stack.Screen options = { {headerTintColor: Colors.black, headerLeft: () => (<Button onPress={() => navigation.navigate('AboutUsScreen')} title = "About Us"
              color = "#fff"/>) , headerTitle: 'PITCH', headerStyle: {backgroundColor: '#2e86de'}}} name = "Back" component = {EstablishHomeScreen}/>
    </Stack.Navigator>
}

export default StreetSoccerNavigator