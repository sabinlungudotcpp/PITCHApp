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
            <Text>Edu Kick More Screen</Text>
        </ScrollView>
    )
};

export default EduKickMoreScreen