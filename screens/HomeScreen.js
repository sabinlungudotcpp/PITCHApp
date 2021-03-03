import React from 'react';
import {View, StyleSheet, Text, ScrollView, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';

const HomeScreen = ({item, navigation}) => { // Home Screen

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
            <Button buttonStyle = {{width: Platform.OS === 'android' ? 120 : 140 ,backgroundColor: '#F7B500', marginRight: Platform.OS === 'android' ? 20 : 40, theme: 'dark', borderRadius: 200}} style = {style.registerBtn} title = "Register" onPress = {() => navigation.navigate('Register')}/>
            <Button buttonStyle = {{width: Platform.OS === 'android' ? 120 : 145 ,backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.primaryColor, marginLeft: Platform.OS === 'android' ? 30 : -5, borderRadius: Platform.OS === 'android' ? 200 : 200}} color = 'black' title = "Login" style = {style.loginBtn} onPress = {() => navigation.navigate('Login')} />
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
        marginBottom: 65,
        fontSize: 35,
        color: 'orange'
    },

    subText: {
        marginLeft: 40,
        fontSize: 20,
        color: 'black',
        marginTop: -30
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
        width: Platform.OS === 'android' ? 200 : 200,
        borderRadius: 200,
        color: 'black',
        paddingLeft: 10,
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        color: 'black',
        left: 25,
        paddingLeft: 10,
        paddingHorizontal: 20,
        marginRight: Platform.OS === 'android' ? 50 : -40,
        elevation: 5,
        marginLeft: -40,
     },

     loginBtn: {
         width: Platform.OS === 'android' ? 200 : 140,
         right: -5,
         left: -10,
         marginLeft: Platform.OS === 'android' ? 40 : 40,
         color: 'black',
         textAlign: 'center'
     },

     aboutUsBtn: {
         width: 170,
         marginLeft: 120,
         marginTop: 30
     },

     descriptionTxt: {
         padding: 38,
         marginTop: 120,
         marginBottom: -160,
         paddingTop: 40,
         fontSize: 18
     }
});

export default HomeScreen;