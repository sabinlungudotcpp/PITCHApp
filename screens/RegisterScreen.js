import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';

const generateRandomString = () => { // Generate random string to store in the Username input
    let characters = 'abcdefgh1234567';
    let output = '';

    for(var i = 0; i < characters.length; i++) {
       output += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return output; // Returns the generated string
}

const RegisterScreen = ({navigation}) => {
    return (
        
<ScrollView>
        <Text style = {styles.registerStyle}>Register</Text>
        <Text style = {styles.organisationTextHeader}>Username</Text>

        <TextInput value = {generateRandomString()} style = {styles.organisationNameContainer}/>

        <Text style = {styles.emailTextContainer}>E-mail Address</Text>
        <TextInput placeholder = "E-mail Address"  style = {styles.emailContainer}/>

        <TextInput style = {styles.cityContainer}/>
        
        <Text style = {styles.passwordTextContainer}>Password</Text>
        <TextInput secureTextEntry = {true} placeholder = "Password" style = {styles.passwordContainer}/>

        <View>
            <Button buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} style = {styles.registerBtn} title = "Register" />
        </View>


        <View>
    <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
            <Text style = {styles.alreadyText}>Already have an account? Sign In</Text>
    </TouchableOpacity>  
    </View>
    
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    registerStyle: {
        fontSize: 30,
        marginTop: 25,
        color: 'black',
        marginLeft: 145,
        top: 20,
        left: 10,
        marginBottom: 10,
        color: '#F7B500'
    },

    organisationTextHeader: {
        marginLeft: 170,
        top: 5,
        marginTop: 50,
        fontSize: 20,
        marginBottom: -15,
        color: 'black'
    },

    emailTextContainer: {
        marginLeft: 140,
        top: 5,
        marginTop: 65,
        fontSize: 20,
        marginBottom: 1,
    },

    passwordTextContainer: {
        left: 170,
        top: 2,
        marginTop: 15,
        fontSize: 20,
        marginBottom: -20,
        color: 'black',
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

    passwordContainer: {
        borderColor: 'black',
        width: 230,
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
        left: 10,
        textAlign: 'center'
    },

    registerBtn: { // Styles for the register button
        width: 180,
        marginLeft: 140,
        marginTop: 10,
        marginBottom: 20,
        left: -10
    },
});

export default RegisterScreen; // Export the Register Screen