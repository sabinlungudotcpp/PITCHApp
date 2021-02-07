import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RegisterScreen = ({navigation}) => {
    return (
        <ScrollView>
    <Text style = {styles.registerStyle}>Register</Text>
        <Input leftIcon = {{name: 'home', paddingTop: 20, color: '#F7B500', marginLeft: 18, marginRight: -1}} placeholder = 'Organisation Name' style = {styles.organisationNameContainer}/>
        <Input leftIcon = {{name: 'email', paddingTop: -1, color: '#F7B500', marginLeft: 18, marginRight: 10}} placeholder = 'E-mail' style = {styles.emailContainer}/>
        <Input leftIcon = {{name: 'phone', paddingTop: 1, paddingLeft: 8, marginRight: 10, color: '#F7B500', marginLeft: 10}} placeholder = 'Mobile Number' style = {styles.mobileNumberContainer}/>
        <Input leftIcon = {{name: 'cloud', paddingTop: 1, marginLeft: 20, marginRight: 10,  color: '#F7B500'}} placeholder = 'Country' style = {styles.countryContainer}/>
        <Input leftIcon = {{name: 'image', color: '#F7B500', marginLeft: 18}} placeholder = 'City' style = {styles.cityContainer}/>
        <Input leftIcon = {{name: ''}} placeholder = 'Password' style = {styles.passwordContainer}/>

    <View>
        <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
            <Text style = {styles.alreadyText}>Already have an account? Sign In</Text>
        </TouchableOpacity>  

        <View>
            <Button buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} style = {styles.registerBtn} title = "Register" />
        </View>

    </View>
        </ScrollView>
    )
};

RegisterScreen.navigationOptions = {
    headerTitle: 'PITCH'
}

const styles = StyleSheet.create({
    registerStyle: {
        fontSize: 30,
        marginTop: 45,
        color: 'black',
        marginLeft: 145
    },

    organisationNameContainer: {
        padding: 10,
        marginTop: 30,
        marginBottom: 1,
        width: 50,
        lineHeight: 20,
        borderBottomWidth: null,
        textTransform: 'uppercase',
        height: 10,
        margin: 10,
        left: -10,
        color: 'black'
    },

    emailContainer: {
        padding: 1,
        width: 50,
        borderBottomWidth: null,
        height: 10,
        left: 1
    },

    mobileNumberContainer: {
        left: 1
    },

    countryContainer: {
        left: 1
    },

    alreadyText: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center'
    },

    registerBtn: {
        width: 120,
        marginLeft: 140,
        marginTop: 28
    },
});

export default RegisterScreen;