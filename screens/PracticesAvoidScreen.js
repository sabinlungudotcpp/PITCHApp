import React from 'react';
import {Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card'; // Imports the Card component
import PracticesAvoidData from '../data/PracticesAvoidData';

const PracticesAvoidScreen = ({props, navigation}) => { // The Practices to Avoid Screen
    return (
        <ScrollView>
            <Text style = {style.mainHeading}>Practices to Avoid</Text>

            <Card style = {style.cardStyle}>
                <FlatList data = {PracticesAvoidData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.descriptionStyleTxt}>{item.description}</Text>} />
            </Card>

            <Card style = {style.cardStyle}>
                <FlatList data = {PracticesAvoidData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.descriptionStyleTxt}>{item.avoid_list}</Text>} />
                <FlatList data = {PracticesAvoidData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.descriptionStyleTxt}>{item.avoid_second}</Text>} />
            </Card>

            <Text style = {style.sanctionTxt}>Practices to Sanction</Text>

            <Card style = {style.cardStyle}>
                <FlatList data = {PracticesAvoidData} keyExtractor = {(item) => item.id} renderItem = {({item}) => item.id >= 2 && item.id <= 6 ? <Text>{item.sanction_data}</Text> : null} />
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
        height: 110,
        marginLeft: 35,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    descriptionStyleTxt: {
        fontSize: 14.5
    },

    sanctionTxt: {
        textAlign: 'center',
        fontSize: 31,
        color: '#F7B500'
    }
});

export default PracticesAvoidScreen; // Export the screen