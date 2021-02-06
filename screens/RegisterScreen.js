import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RegisterScreen = ({navigation}) => {
    return (
        <ScrollView>
    <Text style = {styles.registerStyle}>Register</Text>
        <Input leftIcon = {{name: 'name', marginTop: 18, color: '#F7B500', marginLeft: 12}} placeholder = 'Organisation Name' style = {styles.organisationNameContainer}/>
        <Input leftIcon = {{name: 'email', paddingTop: 21, color: '#F7B500', marginLeft: 10}} placeholder = 'E-mail' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'Mobile Number' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'Country' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'City' style = {styles.organisationNameContainer}/>
        <Input placeholder = 'Password' style = {styles.organisationNameContainer}/>

    <View>
        <TouchableOpacity onPress = {() => navigation.navigate('LoginScreen')}>
            <Text style = {styles.alreadyText}>Already have an account? Sign In</Text>
        </TouchableOpacity>  

        <View>
            <Button style = {{marginTop: 30}} title = "Register" />
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

    alreadyText: {
        fontSize: 20,
        textAlign: 'center'
    }
});

export default RegisterScreen;