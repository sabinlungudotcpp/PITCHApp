import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card';
import GoodPracticeData from '../data/GoodPracticeData';

const GoodPracticeGuidelines = ({props, navigation, item}) => {
    return (
        <ScrollView>
            <Text style = {style.goodPracticeGuidelinesTxt}>Good Practice Guidelines</Text>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    goodPracticeGuidelinesTxt: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GoodPracticeGuidelines;