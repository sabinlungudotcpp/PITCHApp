import React, {useState} from 'react';
import {FlatList, Image, View, StyleSheet, Text, Platform, Modal, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native';
import Colors from '../../constants/Colors';
import Card from '../../components/Card';
import EstablishStreetSoccerData from '../../data/EstablishStreetSoccerData';

const EstablishHomeScreen = ({props, navigation, item}) => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <SafeAreaView style = {styles.defaultView}>
            <ScrollView>
                <Text style = {styles.titleWhat}>{EstablishStreetSoccerData.map(data => data.title_what)}</Text>

                <Image />

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} />
                </Card>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    defaultView: {
        flex: 1
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
    },

    titleWhat: {
        textAlign: 'center',
        fontSize: 27,
        color: '#2e86de',
        marginTop: 60
    }
});

export default EstablishHomeScreen;