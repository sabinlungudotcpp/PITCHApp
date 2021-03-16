import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Image, Platform, Modal, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Card from '../../components/Card';
import Colors from '../../constants/Colors';
import EstablishStreetSoccerData from '../../data/EstablishStreetSoccerData';

const SessionsPartnershipsScreen = ({navigation, props}) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <Text style = {styles.existingSessionTxt}>{EstablishStreetSoccerData.map(title => title.sessions_title)}</Text>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} />
                </Card>

                <Text></Text>


            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    existingSessionTxt: {
        textAlign: 'center',
        marginTop: 70,
        fontSize: 29,
        color: Colors.secondaryColor
    },

    cardStyle: {
        width: 365,
        marginLeft: 37,
        height: 180,
        maxWidth: '100%',
        alignItems: 'center'
    }
});

export default SessionsPartnershipsScreen; // Ep