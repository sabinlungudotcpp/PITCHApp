import React from 'react';
import {View, StyleSheet, FlatList, ScrollView, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';

const PhotographyFilmingScreen = ({props, navigation, item}) => {
    return (
        <ScrollView>
            <Text style = {style.photographyTxt}>{ChildProtectionData.map(value => value.title_photography)}</Text>
        </ScrollView>
    )
};

const style = StyleSheet.create({
    photographyTxt: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 29,
        color: '#F7B500'
    }
})

export default PhotographyFilmingScreen;