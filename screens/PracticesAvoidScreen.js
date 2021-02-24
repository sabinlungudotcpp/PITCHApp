import React from 'react';
import {View, Text, Image, FlatList, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card'; // Imports the Card component

const PracticesAvoidScreen = ({props, navigation}) => { // The Practices to Avoid Screen
    return (
        <ScrollView>
            <View style = {style.mainView}>
            <FlatList />
         </View>
        </ScrollView>
    )
};

const style = StyleSheet.create({
    mainView: {
        flex: 1
    }
});

export default PracticesAvoidScreen; // Export the screen