import React from 'react';
import {View, ScrollView, Text, FlatList, StyleSheet, Image} from 'react-native';
import ChildProtectionData from '../data/ChildProtectionData';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const PoorPracticeScreen = ({item, navigation, props}) => {
    return (
        <ScrollView>
            <Text style = {styles.policyTitleTxt}>{ChildProtectionData.map(value => value.poor_practice_title)}</Text>
            <Image style = {styles.concernImg} source = {(require('../assets/Images/ImageConcerns.jpg'))} />

            <Card style = {styles.cardStyle}>

           </Card>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    policyTitleTxt: {
        textAlign: 'center',
        marginTop: 50,
        color: Colors.primaryColor,
        fontSize: 29
    },

    concernImg: {
        width: 330,
        height: 180,
        marginLeft: 50,
        marginTop: 30
    },

    cardStyle: {
        padding: 10, // Has a padding space of 12
        paddingLeft: -40, // Padding left of -40
        paddingBottom: -5, // Padding bottom of -5
        marginBottom: 1,
        width: 340,
        height: 155,
        marginLeft: 45,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    }
});


export default PoorPracticeScreen; // Export the poor practice screen