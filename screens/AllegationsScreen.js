import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';

const MARGIN_SIZES = {
    marginTop: 35,
    marginBottom: 30,
    marginLeft: 45
}

const PADDING_SIZES = { // Padding sizes
    padding: 10,
    paddingLeft: -40
}

const CARD_SIZES = { // The Cart sizes
    width: 340,
    height: 150
};

const AllegationsScreen = ({item, navigation, props}) => { // The allegations screen used.
    return (
        <ScrollView>
            <Text style = {style.allegationMainTxt}>{ChildProtectionData.map(value => value.allegation_title)}</Text>

            <Card style = {style.cardStyle}>

            </Card>

            <Card style = {style.cardStyle}>
                
            </Card>

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

    cardStyle: { // Styles for the card
        padding: PADDING_SIZES.padding,
        paddingLeft: PADDING_SIZES.paddingLeft,
        paddingBottom: -5,
        marginBottom: MARGIN_SIZES.marginBottom,
        width: CARD_SIZES.width,
        height: CARD_SIZES.height,
        marginLeft: MARGIN_SIZES.marginLeft,
        marginTop: MARGIN_SIZES.marginTop,
        alignItems: 'center', // Aligns the content of the items to the center
        maxWidth: '100%' // Maximum width of 100%
    }
});

export default AllegationsScreen; // Exports the allegations screen