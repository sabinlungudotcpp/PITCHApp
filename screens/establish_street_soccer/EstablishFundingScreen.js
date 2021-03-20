import React, {useState} from "react";
import {View, StyleSheet, Text, Platform, Modal, FlatList, ScrollView} from "react-native";
import {Button} from "react-native-elements";
import Card from "../../components/Card";
import Colors from "../../constants/Colors";
import EstablishStreetSoccerData from "../../data/EstablishStreetSoccerData";

const EstablishFundingScreen = ({navigation, props}) => {
    return (
        <ScrollView style = {styles.defaultView}>
            <Text style = {styles.fundingText}>{EstablishStreetSoccerData.map(title => title.funding_title)}</Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    defaultView: {
        flex: 1
    },

    fundingText: {
        textAlign: 'center',
        fontSize: 29,
        color: Colors.secondaryColor,
        marginTop: 50
    }
});

export default EstablishFundingScreen;