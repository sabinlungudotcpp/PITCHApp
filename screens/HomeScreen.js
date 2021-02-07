import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {CustomHeaderButtons, Item} from '../components/CustomHeaderButton';

const HomeScreen = ({navigation}) => { // Home Screen

    return (
        <ScrollView>
            <View style = {style.main}>
            <View style = {style.mainHeader}>
            <Text style = {style.mainText}>PITCH</Text>
        </View>

        <View style = {style.subHeader}>
            <Text style = {style.subText}>Changing lives for disadvantaged adults </Text>
        </View>

          <View style = {style.btnContainers}>
            <Button containerStyle = {{shadowOffset: '10'}} buttonStyle = {{backgroundColor: 'orange', theme: 'dark', borderRadius: 200}} style = {style.registerBtn} title = "Register" onPress = {() => navigation.navigate('Register')}/>
            <Button buttonStyle = {{backgroundColor: 'orange', borderRadius: 200}} color = 'black' title = "Login" style = {style.loginBtn} onPress = {() => navigation.navigate('Login')} />
        </View>

        </View>
    </ScrollView>
    )
}

const style = StyleSheet.create({

    backImg: {
        width: 450,
        height: 900
    },

    mainHeader: {
        alignItems: 'center',
        flex: 1,
        marginTop: -80
    },

    mainText: {
        marginVertical: 300,
        marginBottom: 50,
        fontSize: 35,
        color: 'orange'
    },

    subText: {
        marginLeft: 40,
        fontSize: 20,
        color: 'black',
        marginTop: -20
    },

    btnContainers: {
        width: 110,
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 60,
        marginTop: 30,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },

    registerBtn: {
        width: 160,
        borderRadius: 200,
        color: 'black',
        paddingLeft: 10,
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        color: 'black',
        left: 10,
        paddingLeft: 10,
        paddingHorizontal: 20,
        marginLeft: -20
     },

     loginBtn: {
         width: 130,
         marginLeft: 15,
         color: 'black',
         textAlign: 'center'
     }
});

export default HomeScreen;