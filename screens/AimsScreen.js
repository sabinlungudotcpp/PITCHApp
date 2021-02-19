import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Card';
import introductionData from '../data/IntroductionData';

const AimsScreen = ({props, navigation}) => { // Aims Screen Component
    return (
        <ScrollView>
            <Text style = {styles.aimsText}>{introductionData.map((value) => value.title_statement)}</Text>

        <Card style = {styles.cardStyle}>
            <FlatList data = {introductionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.statementTxt}>{item.description_statement}</Text>} />
        </Card>

        <Text style = {styles.aimsContainer}>{introductionData.map(value => value.title_aims)}</Text>

        <Card style = {styles.cardStyle}>
            <FlatList data = {introductionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.aimsTextContainer}>{item.description_aims}</Text>} />
        </Card>

        <View style = {styles.btnContainers}>
            <Button style = {styles.backBtn} buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} title = "Back" />
            <Button style = {styles.policyBtn} buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} title = "View Policies" />
        </View>
        
    </ScrollView>
    )
};

const styles = StyleSheet.create({
    aimsText: {
        textAlign: 'center',
        fontSize: 32,
        marginTop: 60,
        color: '#F7B500'
    },

    aimsContainer: {
        textAlign: 'center',
        fontSize: 32,
        color: '#F7B500'
    },

    aimsTextContainer: { // Styles for the text inside the card
        textAlign: 'center',
        padding: -9,
        marginBottom: -10,
        fontSize: 15.5
    },

    cardStyle: {
        padding: 4,
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 40,
        width: 350,
        height: 160,
        marginLeft: 35,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    statementTxt: {
        marginTop: -8,
        fontSize: 15,
        padding: -1
    },

    btnContainers: {
        width: 110,
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 60,
        marginTop: 30,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },

    backBtn: {
        width: 130,
        marginRight: 20,
        paddingLeft: 5,
        marginLeft: -5
    },

    policyBtn: {
        width: 145,
        marginLeft: 10
    }
});

export default AimsScreen;