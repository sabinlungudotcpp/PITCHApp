import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Platform} from 'react-native';
import {TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';

const generateRandomString = () => { // Generate random string to store in the Username input
    let characters = 'abcdefgh12345'; // Random characters to generate
    let output = ''; // Output of the generated string

    for(var i = 0; i < characters.length; i++) { // Loop through the length of the characters string
       output += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return output; // Returns the generated string
}

const RegisterScreen = ({navigation}) => { // Register Screen Component
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        
    <ScrollView>
        <Text style = {styles.registerStyle}>Register</Text>
        <Text style = {styles.organisationTextHeader}>Username</Text>

        <TextInput value = {generateRandomString()} style = {styles.organisationNameContainer}/>

        <Text style = {styles.emailTextContainer}>E-mail Address</Text>
        <TextInput value = {setEmail} onChangeText = {(newEmail) => setEmail(newEmail)} placeholder = "E-mail Address"  style = {styles.emailContainer}/>
        
        <Text style = {styles.passwordTextContainer}>Password</Text>
        <TextInput autoCapitalize = {false} secureTextEntry = {true} placeholder = "Password" onChangeText = {(newPassword) => setPassword(newPassword)} style = {styles.passwordContainer}/>

        <View>
            <Button buttonStyle = {{marginLeft: Platform.OS === 'android' ? 137 : null ,width: Platform.OS === 'android' ? 150 : 150 ,backgroundColor: '#F7B500', borderRadius: 200}} style = {styles.registerBtn} title = "Register" />
        </View>

        <View>

     <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
            <Text style = {styles.alreadyText}>Already have an account? Sign In</Text>
     </TouchableOpacity>  
         </View>

    </ScrollView>
    )
};

const styles = StyleSheet.create({ // Styles for the Register Screen
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

    emailTextContainer: { // The email text container
        marginLeft: 140,
        top: 5,
        marginTop: 65,
        fontSize: 20, // Font size of 20
        marginBottom: 1,
    },

    passwordTextContainer: {
        left: 170,
        top: 2,
        marginTop: 15,
        fontSize: 20,
        marginBottom: -20,
        marginTop: 40,
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
        marginTop: Platform.OS === 'android' ? 30 : 10,
        marginBottom: Platform.OS === 'android' ? 50 : 10,
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