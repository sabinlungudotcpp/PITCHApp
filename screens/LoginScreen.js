import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const LoginScreen = ({props, navigation}) => { // Login Screen component
    return (
       <ScrollView>
           <Text style = {styles.loginTxt}>Login</Text>

    <View>
            <Text style = {styles.emailTextContainer}>E-mail Address</Text>
            <TextInput placeholder = "E-mail Address"  style = {styles.emailContainer}/>
    </View>

    <View>
    <Text style = {styles.emailTextContainer}>E-mail Address</Text>

    </View>

    <View>
        <Button buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} style = {styles.loginBtn} title = "Login" />
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
        marginTop: 60
    },

    emailTextContainer: {
        marginLeft: 145,
        top: 5,
        marginTop: 50,
        fontSize: 20,
        marginBottom: 5
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

    loginBtn: {
        width: 165,
        alignContent: 'center',
        marginLeft: 120,
        marginTop: 100
    }
});

export default LoginScreen;