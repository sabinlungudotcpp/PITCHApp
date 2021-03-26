import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const EdukickScreen = ({props, navigation, item}) => { // Edu Kick screen
    return (
        <ScrollView>
            <Text style = {styles.title}>Edu Kick</Text>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    title: {
        marginLeft: 130,
        marginTop: 30,
        fontSize: 24,
        color: Colors.primaryColor
    }
})

export default EdukickScreen;