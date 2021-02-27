import React from 'react';
import {View, ScrollView, Text, FlatList, StyleSheet} from 'react-native';
import ChildProtectionData from '../data/ChildProtectionData';
import Card from '../components/Card';

const PoorPracticeScreen = ({item, navigation, props}) => {
    return (
        <ScrollView>
            <Text style = {styles.policyTitleTxt}>{ChildProtectionData.map(value => value.poor_practice_title)}</Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    policyTitleTxt: {
        textAlign: 'center'
    }
});


export default PoorPracticeScreen;