import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import {Button} from 'react-native-elements';
import introductionData from '../data/IntroductionData';
import Card from '../components/Card';

const AboutUsScreen = ({item, navigation}) => {
    return (

    <ScrollView>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.aboutTitle}>{item.about_title}</Text>} keyExtractor = {(item) => item.id}/>
        <Image style = {{width: 350, height: 185, marginLeft: 38}} source = {require('../assets/Images/SlumSoccer.jpg')} />

        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.about_description}>{item.about_description}</Text>} keyExtractor = {(item) => item.id}/>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.about_sub}>{item.about_sub_description}</Text>} keyExtractor = {(item) => item.id}/>
    </ScrollView>

    )
};

const style = StyleSheet.create({

    aboutTitle: {
        marginTop: 60,
        marginBottom: -55,
        textAlign: 'center',
        fontSize: 34,
        color: '#F7B500',
        right: 2
    },

    about_description: { // The description of the About Us
        padding: 15,
        marginVertical: 33,
        fontSize: 18,
        marginLeft: 20,
        marginBottom: -59
    },

    about_sub: {
        flex: 1,
        alignItems: 'center',
        fontSize: 18,
        padding: 15,
        marginLeft: 17
    }
});

export default AboutUsScreen;