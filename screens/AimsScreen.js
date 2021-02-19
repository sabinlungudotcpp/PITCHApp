import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Card';
import introductionData from '../data/IntroductionData';

const AimsScreen = ({props, navigation, item}) => {
    return (
        <ScrollView>
            <Text style = {styles.aimsText}>{introductionData.map(value => value.title_statement)}</Text>

            <Card style = {styles.cardStyle}>

            </Card>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    aimsText: {
        textAlign: 'center',
        fontSize: 32,
        marginTop: 100,
        color: '#F7B500'
    },

    cardStyle: {
        padding: -3,
        paddingLeft: -40,
        marginBottom: 40,
        width: 350,
        height: 160,
        marginLeft: 35,
        marginTop: 40,
        alignItems: 'center',
        maxWidth: '100%'
    }
});

export default AimsScreen;