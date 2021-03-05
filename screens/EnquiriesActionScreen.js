import React from 'react';
import {View, StyleSheet, ScrollView, Text, Platform, FlatList, Image} from 'react-native';
import {Button} from 'react-native-elements';
import ChildProtectionData from '../data/ChildProtectionData';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const EnquiriesActionScreen = ({props, navigation, item}) => {

    return (
        <ScrollView>
            <Text style = {styles.enquiriesTxt}>{ChildProtectionData.map(value => value.enquiries_title)}</Text>
            <Image style = {styles.enquiriesImg} source = {require('../assets/Images/ImageEnquiries.jpg')} />

            <Card style = {styles.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} />
            </Card>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    enquiriesTxt: {
        textAlign: 'center',
        marginTop: 60,
        color: Colors.primaryColor,
        fontSize: 31
    },

    enquiriesImg: {
        width: 290,
        height: 180,
        marginLeft: 60,
        marginTop: 30
    },

    cardStyle: {
        padding: 10, 
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 1,
        width: 340,
        height: 160,
        marginLeft: 45,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    }
});

export default EnquiriesActionScreen;