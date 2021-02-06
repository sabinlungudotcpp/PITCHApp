import React from 'react';
import {View, StyleSheet, Text, FlatList, Image, ScrollView} from 'react-native';
import {Button} from 'react-native';
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
            <Button color = 'black' style = {style.registerBtn} title = "Register" onPress = {() => navigation.navigate('RegisterScreen')} />
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
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        backgroundColor:'#F7B500',
        left: -40,
        right: 30,
        position: 'relative',
        marginStart: 100,
        letterSpacing: 30,
        alignContent: 'center'
    },

    registerBtn: {
        width: 120,
        color: 'black',
        paddingLeft: 10,
        color: 'black'
    }
});

export default HomeScreen;