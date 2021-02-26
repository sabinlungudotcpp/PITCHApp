import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';

const MARGIN_SIZES= {
    marginTop: 35,
    marginBottom: 30
}

const PADDING_SIZES = { // Padding sizes

}

const AllegationsScreen = ({item, navigation, props}) => {
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

    cardStyle: {
        padding: 10, // Has a padding space of 12
        paddingLeft: -40, // Padding left of -40
        paddingBottom: -5,
        marginBottom: MARGIN_SIZES.marginBottom,
        width: 340,
        height: 150, // The height of the card is 150 pixels
        marginLeft: 45,
        marginTop: 35,
        alignItems: 'center', // Aligns the content of the items to the center
        maxWidth: '100%' // Maximum width of 100%
    }
});

export default AllegationsScreen; // Exports the allegations screen