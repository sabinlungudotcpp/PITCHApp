import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';

const AllegationsScreen = ({item, navigation, props}) => {
    return (
        <ScrollView>
            <Text style = {style.allegationMainTxt}>{ChildProtectionData.map(value => value.allegation_title)}</Text>
        </ScrollView>
    )
};

const style = StyleSheet.create({
    allegationMainTxt: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: 50,
        color: Colors.primaryColor // The color of the text
    },

    cardStyle: {
        
    }
});

export default AllegationsScreen; // Exports the allegations screen