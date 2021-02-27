import React from 'react';
import {View, ScrollView, Text, FlatList, StyleSheet, Image} from 'react-native';
import ChildProtectionData from '../data/ChildProtectionData';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const PoorPracticeScreen = ({item, navigation, props}) => {
    return (
        <ScrollView>
            <Text style = {styles.policyTitleTxt}>{ChildProtectionData.map(value => value.poor_practice_title)}</Text>
            <Image style = {styles.concernImg} source = {(require('../assets/Images/ImageConcerns.jpg'))} />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    policyTitleTxt: {
        textAlign: 'center',
        marginTop: 50,
        color: Colors.primaryColor,
        fontSize: 29
    },

    concernImg: {
        width: 300,
        height: 160,
        marginLeft: 60,
        marginTop: 30
    }
});


export default PoorPracticeScreen; // Export the poor practice screen