import React from 'react';
import {FlatList, Image, View, StyleSheet, Text, Platform, Modal, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native';
import Colors from '../../constants/Colors';
import Card from '../../components/Card';
import EstablishStreetSoccerData from '../../data/EstablishStreetSoccerData';

const EstablishHomeScreen = ({props, navigation, item}) => {
    return (
        <SafeAreaView style = {styles.defaultView}>
            <ScrollView>
                <Text style = {styles.titleWhat}>{EstablishStreetSoccerData.map(data => data.title_what)}</Text>

                <Image />

                <Card>
                    <FlatList />
                </Card>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    defaultView: {
        flex: 1
    },

    titleWhat: {
        textAlign: 'center',
        fontSize: 27,
        color: Colors.primaryColor,
        marginTop: 60
    }
});

export default EstablishHomeScreen;