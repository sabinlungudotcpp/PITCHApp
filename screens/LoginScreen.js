import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const SIZES = {
    borderRadius: 200
}

const LoginScreen = ({props, navigation}) => { // Login Screen component

    return (
       <ScrollView>
           <Text style = {styles.loginTxt}>Login</Text>

        <View>
            <Text style = {styles.emailTextContainer}>E-mail Address</Text>
            <TextInput placeholder = "E-mail Address" style = {styles.emailContainer}/>
        </View>

        <View>
            <Text style = {styles.passwordTextContainer}>Password</Text>
            <TextInput secureTextEntry = {true} placeholder = "Password" style = {styles.passwordContainer}/>

        <View>
            <Button buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} style = {styles.loginBtn} title = "Login"/>
        </View>

        <View>
            <TouchableOpacity onPress = {() => navigation.navigate('Register')}><Text style = {styles.registerTxt}>Already have an account? Sign In</Text></TouchableOpacity>  
        </View>
    </View>

 </ScrollView>

    )
}

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        justifyContent: 'center'
    },

    loginTxt: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: 50,
        top: 2,
        color: '#F7B500'
    },

    registerTxt: {
        textAlign: 'center',
        fontSize: 20,
        top: 10,
        left: 10
    },

    emailTextContainer: {
        marginLeft: 145,
        top: 5,
        marginTop: 50,
        fontSize: 20,
        marginBottom: 5
    },

    passwordTextContainer: {
        marginLeft: 167,
        top: 5,
        marginTop: 25,
        fontSize: 20,
        marginBottom: 1
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
        marginTop: 20,
        borderColor: Colors.primaryColor,
        marginLeft: 100,
        borderWidth: 2,
        padding: 10,
        textAlign: 'center'
    },

    loginBtn: { // Login button styling
        width: 180,
        marginLeft: 120,
        marginTop: 40,
        marginBottom: 27,
        left: 7
    }
});

export default LoginScreen; // Exports the login screen to be reused