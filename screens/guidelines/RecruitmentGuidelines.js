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
        </ScrollView>
    )
};

const style = StyleSheet.create({
    guidelineTitle: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 31,
        color: Colors.primaryColor
    }
})

export default RecruitmentGuidelines;