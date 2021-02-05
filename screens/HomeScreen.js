import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, Text, SafeAreaView, ImageBackground, FlatList, Image, ScrollView} from 'react-native';
import {Button} from 'react-native';
import introData from '../data/IntroductionData';

const HomeScreen = ({props, state, navigation}) => {
    return (
        <ScrollView>
        <View style = {style.mainHeader}>
            <Text style = {style.mainText}>PITCH</Text>
        </View>

        <View style = {style.subHeader}>
            <Text style = {style.subText}>Changing lives for disadvantaged adults </Text>
        </View>

        <View style = {style.btnContainer}>
            <Button color = 'black' style = "bold" style = {style.registerBtn} title = "Register" />
        </View>
    </ScrollView>
        
    )
}

HomeScreen.navigationOptions = {
    headerTitle: 'PITCH'
}

const style = StyleSheet.create({

    mainHeader: {
        alignItems: 'center',
        flex: 1,
        marginTop: -60
    },

    mainText: {
        marginVertical: 300,
        marginBottom: 50,
        fontSize: 35
    },

    subText: {
        marginLeft: 40,
        fontSize: 20,
        color: 'orange',
        marginTop: -20
    },

    btnContainer: {
        backgroundColor: 'orange',
        borderRadius: 20,
        padding: -20,
        marginLeft: 30,
        marginTop: 30
    },

    registerBtn: {
        fontSize: 20,
        color: 'black'
    }

});

export default HomeScreen;