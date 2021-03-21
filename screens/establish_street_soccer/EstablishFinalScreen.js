import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Platform, FlatList, ScrollView, Text} from "react-native";
import {Button} from "react-native-elements";
import Card from "../../components/Card";
import Colors from "../../constants/Colors";
import EstablishStreetSoccerData from "../../data/EstablishStreetSoccerData";

const EstablishFinalScreen = ({navigation, props}) => {
    
    return (
        <ScrollView style = {styles.defaultView}>
            <Text style = {StyleSheet.communityTitle}>{EstablishStreetSoccerData.map(title => title.community_title)}</Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    defaultView: {
        flex: 1
    }
})

export default EstablishFinalScreen;