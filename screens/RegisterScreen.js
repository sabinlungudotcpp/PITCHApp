import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';

const RegisterScreen = () => {
    return (
        <ScrollView>
                      <Text style = {styles.registerStyle}>Register</Text>
        <Input placeholder = 'Organisation'/>
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
    }
});

export default RegisterScreen;