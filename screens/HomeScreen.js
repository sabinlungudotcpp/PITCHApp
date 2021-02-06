import React from 'react';
import {View, StyleSheet, Text, FlatList, Image, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import introData from '../data/IntroductionData';

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
            <Button buttonStyle = {{backgroundColor: 'orange', fontSize: 10}} color = 'black' style = {style.registerBtn} title = "Register" onPress = {() => navigation.navigate('RegisterScreen')}/>
            <Button buttonStyle = {{backgroundColor: 'orange'}} color = 'black' title = "Login" style = {style.loginBtn} onPress = {() => navigation.navigate('LoginScreen')} />
        </View>


        </View>
    </ScrollView>
    )
}

HomeScreen.navigationOptions = {
    headerTitle: 'PITCH'
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
        marginLeft: 80,
        marginTop: 30,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    registerBtn: {
        width: 160,
        borderRadius: 200,
        color: 'black',
        paddingLeft: 10,
        color: 'black',
        paddingLeft: 10,
        paddingHorizontal: 20,
        marginLeft: -20
     },

     loginBtn: {
         width: 120,
         marginLeft: 10
     }
});

export default HomeScreen;