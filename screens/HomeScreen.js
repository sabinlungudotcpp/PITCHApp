import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, Text, SafeAreaView, ImageBackground, FlatList, Image, ScrollView} from 'react-native';
import {Button} from 'react-native';
import introData from '../data/IntroductionData';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({props, state, navigation}) => {
    return (
        <ScrollView>
            <View style = {style.main}>
            <View style = {style.mainHeader}>
            <Text style = {style.mainText}>PITCH</Text>
        </View>

        <View style = {style.subHeader}>
            <Text style = {style.subText}>Changing lives for disadvantaged adults </Text>
        </View>

    <TouchableOpacity>
       
    </TouchableOpacity>
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
        marginTop: -80
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

    btnMain: {
        flexDirection: 'row'
    },

    btnContainer: {
        backgroundColor: 'orange',
        borderRadius: 25,
        width: 120,
        padding: -100,
        marginLeft: 50,
        marginTop: 30,
        flexDirection: 'row'
    },

    registerBtn: {
        fontSize: 20,
        color: 'black',
        flexDirection: 'row'
    },

    loginContainer: {
        backgroundColor: 'orange',
        borderRadius: 20,
        width: 120,
        padding: -50,
        marginLeft: 50,
        marginTop: 30
    },

    loginBtn: {
        fontSize: 20,
        color: 'black',
        marginLeft: 30
    }

});

export default HomeScreen;