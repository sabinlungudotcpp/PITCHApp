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
            <View style = {style.btnContainer}>
                <Button title = "Register" color = "black"></Button>
            </View>

            <View style = {style.loginContainer}>
                 <Button title = "Login" color = "black"></Button>
            </View>
            
      
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
        fontSize: 35,
        color: 'orange'
    },

    subText: {
        marginLeft: 40,
        fontSize: 20,
        color: 'black',
        marginTop: -20
    },

    btnMain: {
        flexDirection: 'row'
    },

    btnContainer: {
        backgroundColor: 'orange',
        borderRadius: 20,
        width: 130,
        padding: -100,
        marginLeft: 50,
        marginTop: 30,
        textAlign: 'center',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center'
    },

    registerBtn: {
        fontSize: 30,
        color: 'black',
        flexDirection: 'row',
        textAlign: 'center',
        marginLeft: 50
    },

    loginContainer: {
        backgroundColor: 'orange',
        borderRadius: 20,
        width: 130,
        padding: -50,
        marginLeft: 50,
        marginTop: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1
    },

    loginBtn: {
        fontSize: 20,
        color: 'black',
        marginLeft: 30
    }

});

export default HomeScreen;