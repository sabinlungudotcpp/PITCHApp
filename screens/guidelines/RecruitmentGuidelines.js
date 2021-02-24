import React from 'react';
import {View, ScrollView, StyleSheet, FlatList, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../../components/Card';
import ChildProtectionData from '../../data/ChildProtectionData';
import Colors from '../../constants/Colors';

const RecruitmentGuidelines = ({props, navigation, items}) => {
    return (
        <ScrollView>
            <Text style = {style.guidelineTitle}>{ChildProtectionData.map(data => data.guideline_title)}</Text>

            <Card style = {style.cardStyle}>

            </Card>
        </ScrollView>
    )
};

const style = StyleSheet.create({
    guidelineTitle: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 31,
        color: Colors.primaryColor
    },

    cardStyle: {
        padding: 10, // Has a padding space of 12
        paddingLeft: -40, // Padding left of -40
        paddingBottom: -5,
        marginBottom: 1,
        width: 340,
        height: 140,
        marginLeft: 45,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    }
})

export default RecruitmentGuidelines;