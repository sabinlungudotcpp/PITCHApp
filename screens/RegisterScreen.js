import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';


const RegisterScreen = ({navigation}) => {
    return (
<ScrollView>
    <Text style = {styles.registerStyle}>Register</Text>
    <Text style = {styles.organisationTextHeader}>Organisation Name</Text>

    <TextInput placeholder = "Organisation Name" style = {styles.organisationNameContainer}/>
    <Text style = {styles.emailTextContainer}>E-mail Address</Text>

    <TextInput placeholder = "E-mail Address"  style = {styles.emailContainer}/>
    <TextInput placeholder = 'Mobile Number' style = {styles.mobileNumberContainer}/>
    <TextInput placeholder = 'Country' style = {styles.countryContainer}/>

        <TextInput style = {styles.cityContainer}/>
        <TextInput style = {styles.passwordContainer}/>

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

const styles = StyleSheet.create({
    registerStyle: {
        fontSize: 30,
        marginTop: 25,
        color: 'black',
        marginLeft: 145
    },

    organisationTextHeader: {
        marginLeft: 123,
        top: 5,
        marginTop: 40,
        fontSize: 20,
        marginBottom: -15,
        color: 'black'
    },

    emailTextContainer: {
        marginLeft: 137,
        top: 5,
        marginTop: 50,
        fontSize: 20,
        marginBottom: 1,
    },

    organisationNameContainer: {
        borderColor: 'black',
        width: 230,
        borderRadius: 200,
        marginTop: 40,
        borderColor: '#F7B500',
        marginLeft: 100,
        borderWidth: 2,
        padding: 10,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: -30
    },

    emailContainer: {
        borderColor: 'black',
        width: 230,
        borderRadius: 200,
        marginTop: 20,
        borderColor: '#F7B500',
        marginLeft: 100,
        borderWidth: 2,
        padding: 10,
        textAlign: 'center'
    },

    mobileNumberContainer: {
        borderColor: 'black',
        width: 225,
        borderRadius: 200,
        marginTop: 38,
        borderColor: 'orange',
        marginLeft: 100,
        borderWidth: 2,
        padding: 10,
        textAlign: 'center',
        fontSize: 15,
    },

    countryContainer: {
        borderColor: 'black',
        width: 215,
        borderRadius: 200,
        marginTop: 40,
        borderColor: '#F7B500',
        marginLeft: 100,
        borderWidth: 3,
        padding: 10,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: -30
    },

    passwordContainer: {
        borderColor: 'black',
        width: 215,
        borderRadius: 200,
        marginTop: 40,
        borderColor: '#F7B500',
        marginLeft: 100,
        borderWidth: 3,
        padding: 10,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 30
    },

    alreadyText: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center'
    },

    registerBtn: {
        width: 150,
        marginLeft: 140,
        marginTop: 28
    },
});

export default RegisterScreen;