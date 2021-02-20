import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card';
import GuidelineData from '../data/GuidelineData';
import GoodPracticeData from '../data/GoodPracticeData';

const GoodPracticeGuidelines = ({props, navigation, item}) => {
    return (
        <ScrollView>
            <Text style = {style.goodPracticeGuidelinesTxt}>{GuidelineData.map(value => value.title_practice)}</Text>

         <Card style = {style.cardStyle}>

         </Card>

         <Card style = {style.cardStyle}>
         
         </Card>

         <Card style = {style.cardStyle}>
         
         </Card>

        <View style = {style.btnContainer}>
            <Button style = {style.guidelineBtn} buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} title = "Back" />
        </View>

        </ScrollView>
    )
}

const style = StyleSheet.create({
    goodPracticeGuidelinesTxt: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 50,
        color: '#F7B500'
    },

    cardStyle: {
        padding: 8,
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 30,
        width: 350,
        height: 130,
        marginLeft: 35,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    guidelineBtn: {
        width: 170,
        marginRight: 20,
        paddingLeft: 5,
        marginLeft: 120,
        marginTop: 10
    }
});

export default GoodPracticeGuidelines;