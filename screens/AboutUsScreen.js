import React from 'react';
import {Text, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import introductionData from '../data/IntroductionData';
import Colors from '../constants/Colors';

const AboutUsScreen = ({item, navigation}) => {
    return (

    <ScrollView>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.aboutTitle}>{item.about_title}</Text>} keyExtractor = {(item) => item.id}/>
        <Image style = {{width: 350, height: 185, marginLeft: 38}} source = {require('../assets/Images/SlumSoccer.jpg')} />

        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.about_description}>{item.about_description}</Text>} keyExtractor = {(item) => item.id}/>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.about_sub}>{item.about_sub_description}</Text>} keyExtractor = {(item) => item.id}/>
        <Text style = {style.missionTxt}>Our Mission</Text>

        <Image style = {{width: 340, height: 200, marginLeft: 37, opacity: 0.8, backgroundColor: 'black', marginBottom: 150, marginTop: 25}} source = {require('../assets/Images/missionimg.jpg')} />
    </ScrollView>

    )
};

const style = StyleSheet.create({

    aboutTitle: {
        marginTop: 60,
        marginLeft: 3,
        marginBottom: -53,
        textAlign: 'center',
        fontSize: 32,
        color: Colors.primaryColor,
        right: 2
    },

    about_description: { // The description of the About Us
        padding: 15,
        marginVertical: 33,
        fontSize: 18,
        marginLeft: 20,
        marginBottom: -65
    },

    about_sub: {
        flex: 1,
        alignItems: 'center',
        fontSize: 18,
        padding: 15,
        marginLeft: 20
    },

    subTitle: {
        fontSize: 24,
        marginBottom: 30,
        marginTop: -140,
        marginLeft: 120,
        fontSize: 32,
        color: Colors.primaryColor
    },

    missionTxt: {
        marginLeft: 120,
        marginTop: -200,
        fontSize: 32,
        color: Colors.primaryColor
    }
});

export default AboutUsScreen;