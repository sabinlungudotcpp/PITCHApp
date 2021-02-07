import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RegisterScreen = ({navigation}) => {
    return (
        <ScrollView>
    <Text style = {styles.registerStyle}>Register</Text>
        <Input leftIcon = {{name: 'home', paddingTop: 20, color: '#F7B500', marginLeft: 18, marginRight: -1}} placeholder = 'Organisation Name' style = {styles.organisationNameContainer}/>
        <Input leftIcon = {{name: 'email', paddingTop: 4, color: '#F7B500', marginLeft: 18, marginRight: 10}} placeholder = 'E-mail' style = {styles.emailContainer}/>
        <Input leftIcon = {{name: 'phone', paddingTop: 18, color: '#F7B500', marginLeft: 10}} placeholder = 'Mobile Number' style = {styles.mobileNumberContainer}/>
        <Input leftIcon = {{name: 'cloud', paddingTop: 18, marginLeft: 10, color: '#F7B500'}} placeholder = 'Country' style = {styles.countryContainer}/>
        <Input leftIcon = {{name: ''}} placeholder = 'City' style = {styles.cityContainer}/>
        <Input leftIcon = {{name: ''}} placeholder = 'Password' style = {styles.passwordContainer}/>

    <View>
        <TouchableOpacity onPress = {() => navigation.navigate('LoginScreen')}>
            <Text style = {styles.alreadyText}>Already have an account? Sign In</Text>
        </TouchableOpacity>  

        <View>
            <Button style = {styles.registerBtn} title = "Register" />
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

    },

    mobileNumberContainer: {
        
    },

    alreadyText: {
        fontSize: 20,
        textAlign: 'center'
    },

    registerBtn: {
        width: 100,
        marginLeft: 145,
        marginTop: 25
    }
});

export default RegisterScreen;