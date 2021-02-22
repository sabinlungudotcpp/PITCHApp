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
        width: 300,
        height: 180,
        marginLeft: 58,
        marginVertical: 25
    }
})

export default PhotographyFilmingScreen;