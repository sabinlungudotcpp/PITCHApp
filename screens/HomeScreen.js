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
                <Button style = {style.loginBtn} title = "Register" onPress = {() => navigation.navigate('RegisterScreen')} />
            </View>
        </View>
    </ScrollView>
    )
}

HomeScreen.navigationOptions = {
    headerTitle: 'Home'
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
        width: 150,
        marginLeft: 20,
        marginTop: 30,
        backgroundColor: 'orange'
    },

    loginBtn: {

    }
});

export default HomeScreen;