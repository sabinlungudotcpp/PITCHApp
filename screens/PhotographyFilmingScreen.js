import React from 'react';
import {View, StyleSheet, FlatList, ScrollView, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';

const PhotographyFilmingScreen = ({props, navigation, item}) => {
    return (
        <ScrollView>
            <Text style = {style.photographyTxt}>{ChildProtectionData.map(value => value.title_photography)}</Text>
            <Image style = {style.photographyImg} source = {require('../assets/Images/ImagePhotography.jpg')} />

            <Card style = {style.cardStyle}>

            </Card>

            <View style = {style.btnContainers}>

            </View>
        </ScrollView>
    )
};

const style = StyleSheet.create({
    photographyTxt: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 31,
        color: '#F7B500'
    },

    photographyImg: {
        width: 320,
        height: 200,
        marginLeft: 52,
        marginVertical: 25
    },

    cardStyle: {
        padding: 12,
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 30,
        width: 320,
        height: 160,
        marginLeft: 50,
        marginTop: 20,
        alignItems: 'center',
        maxWidth: '100%'
    },

    btnContainers: {
        
    }
})

export default PhotographyFilmingScreen;