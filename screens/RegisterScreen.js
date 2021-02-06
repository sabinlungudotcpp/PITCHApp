import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RegisterScreen = ({navigation}) => {
    return (
        <ScrollView>
    <Text style = {styles.registerStyle}>Register</Text>
        <Input placeholder = 'Organisation Name' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'E-mail' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'Mobile Number' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'Country' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'City' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'Password' style = {styles.organisationNameContainer}/>

    <View>
        <TouchableOpacity onPress = {() => navigation.navigate('LoginScreen')}>
            <Text style = {styles.alreadyText}>Already have an account? Sign In</Text>
        </TouchableOpacity>  
    </View>
        </ScrollView>
      
    )
};

RegisterScreen.navigationOptions = {
    headerTitle: 'Register'
}

const styles = StyleSheet.create({
    registerStyle: {
        fontSize: 30,
        marginTop: 80,
        color: '#F7B500',
        marginLeft: 145
    },

    organisationNameContainer: {
        padding: 10,
        marginTop: 30,
        width: 50,
        lineHeight: 20,
        borderBottomWidth: null,
        textTransform: 'uppercase',
        height: 10,
        margin: 10,
        left: -10,
        color: 'black'
    },

    alreadyText: {
        fontSize: 20,
        textAlign: 'center'
    }
});

export default RegisterScreen;