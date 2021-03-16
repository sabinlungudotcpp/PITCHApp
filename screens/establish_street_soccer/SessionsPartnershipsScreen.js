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

                <Text style = {styles.partnershipTitle}>{EstablishStreetSoccerData.map(title => title.partnerships_title)}</Text>

                <Card style = {styles.cardStyle}>
                    <FlatList />
                </Card>


                <View style = {styles.btnContainer}>
                    <Button style = {styles.backBtn} onPress = {() => {}} buttonStyle = {{borderRadius: 200}} title = "Back" />
                    <Button style = {styles.viewMoreBtn} onPress = {() => {}} buttonStyle = {{borderRadius: 200}} title = "View More" />
                </View>

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
    },

    partnershipTitle: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 29,
        color: Colors.secondaryColor
    },

    btnContainer: {
        width: 110,
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: -80,
        marginTop: 35,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        marginBottom: 50  
    },

    backBtn: {
        width: 130,
        marginLeft: 150
    },

    viewMoreBtn: {
       width: 150,
       marginLeft: 25
    }
});

export default SessionsPartnershipsScreen; // Ep