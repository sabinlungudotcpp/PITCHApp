import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Platform, ScrollView, FlatList, Modal} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import EduKickData from '../data/EduKickData';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EduKickMoreScreen = ({props, navigation}) => {
    return (
        <ScrollView>
            <Text style = {styles.eduKickTitleMore}>{EduKickData.map(title => title.edu_title_more)}</Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    eduKickTitleMore: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 28,
        color: Colors.primaryColor
    }
})

export default EduKickMoreScreen