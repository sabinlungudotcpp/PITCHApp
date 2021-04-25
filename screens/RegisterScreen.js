import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Platform, Alert} from 'react-native';
import {TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';

/**
 * @fileoverview: Register Screen file contains all of the code to register a user
 * @author: Sabin Constantin Lungu
 * @description: The function stores two variables, the characters to randomly jumble and generate, an output variable which stores the generated random string in the output
 * @description: Loops over the length of the characters and concatenates the output variable to a randomly generated string
 * @returns: The random generated string gets outputted
 */

const generateRandomString = () => { 
    let characters = 'abcdefgh12345'; 
    let output = ''; 

    for(var i = 0; i < characters.length; i++) { 
       output += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return output; 
}

/**
 * @fileoverview: Register Screen file contains all of the code to register a user
 * @author: Sabin Constantin Lungu
 * @description: The function stores two variables, the characters to randomly jumble and generate, an output variable which stores the generated random string in the output
 * @description: Loops over the length of the characters and concatenates the output variable to a randomly generated string
 * @returns: The random generated string gets outputted
 */

const RegisterScreen = ({navigation, props}) => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateFields = () => { 
        if(email.trim() === "" || !email.includes('@')) {
            Alert.alert('You must provide a valid e-mail address');
            setEmail('');
        }

        else if(email.length < 5) {
            Alert.alert('E-mail address is too short');
            setEmail('');
        }

        else if(password.trim() === "" || password.length < 8) { // If the password field is empty
            Alert.alert('Password invalid');
            setPassword('');
        }

        else {
            setEmail(email);
            setPassword(password);
        }
    }

    return (
        
    <ScrollView>
        <Text style = {styles.registerStyle}>Register</Text>
        <Text style = {styles.organisationTextHeader}>Username</Text>

        <TextInput value = {generateRandomString()} style = {styles.organisationNameContainer}/>

        <Text style = {styles.emailTextContainer}>E-mail Address</Text>
            <TextInput value = {email} onChangeText = {(newEmail) => setEmail(newEmail)} placeholder = "E-mail Address"  style = {styles.emailContainer}/>
        
        <Text style = {styles.passwordTextContainer}>Password</Text>
            <TextInput value = {password} autoCapitalize = {false} secureTextEntry = {true} placeholder = "Password" onChangeText = {(newPassword) => setPassword(newPassword)} style = {styles.passwordContainer}/>

        <View>
            <Button onPress = {validateFields} buttonStyle = {{marginLeft: Platform.OS === 'android' ? 137 : null ,width: Platform.OS === 'android' ? 150 : 150 ,backgroundColor: '#F7B500', borderRadius: 200}} style = {styles.registerBtn} title = "Register" />
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

    passwordTextContainer: { // Styles for the password container
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