import React from 'react';
import {View, Text, Image, FlatList, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card'; // Imports the Card component

const PracticesAvoidScreen = ({props, navigation}) => { // The Practices to Avoid Screen
    return (
        <ScrollView>
            <Text style = {style.mainHeading}>Practices to Avoid</Text>

            <Card style = {style.cardStyle}>

            </Card>

            <Text style = {style.mainHeading}>Practices to Sanction</Text>

            <Card style = {style.cardStyle}>

            </Card>

        </ScrollView>
    )
};

const style = StyleSheet.create({
    mainView: {
        flex: 1
    },

    mainHeading: {
        textAlign: 'center',
        marginTop: 55,
        fontSize: 31,
        color: '#F7B500'
    },

    cardStyle: { // The style for the card
        padding: 8, // Padding of 8 pixels
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 30,
        width: 350,
        height: 130,
        marginLeft: 35,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    }
});

export default PracticesAvoidScreen; // Export the screen