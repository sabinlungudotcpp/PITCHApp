import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';

const RegisterScreen = () => {
    return (
        <ScrollView>
    <Text style = {styles.registerStyle}>Register</Text>
        <Input placeholder = 'Organisation Name' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'E-mail' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'Mobile Number' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'Country' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'City' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'Password' style = {styles.organisationNameContainer}/>
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

    }
});

export default RegisterScreen;