import React from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList, Image} from 'react-native';
import {Button} from 'react-native';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';

const RecruitmentScreen = ({props, navigation, item}) => { // The Recruitment Screen
    return (
        <ScrollView>
            <Text style = {style.recruitmentTxt}>Recruitment / Training</Text>
            <Image style = {style.recruitmentImg} source = {require('../assets/Images/ImageRecruitment.jpg')} />

            <Card style = {style.cardStyle}>
                <FlatList />
            </Card>


        </ScrollView>
    )
};

const style = StyleSheet.create({ // The styles for the recruitment screen
    recruitmentTxt: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 31,
        color: '#F7B500'
    },

    recruitmentImg: {
        width: 280,
        height: 160,
        marginLeft: 68,
        marginTop: 20
    }
});

export default RecruitmentScreen; // Export the Recruitment Screen