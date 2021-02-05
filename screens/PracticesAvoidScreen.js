import React from 'react';
import {Virw, Text, Image, FlatList, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';

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