import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Button} from 'react-native-elements';

const PolicyIntroductionScreen = ({props, navigation}) => { // The Child Protection Policy Introduction Screen
    return (
        <View style = {style.mainview}>
            <FlatList/>
        </View>
    )
}

const style = StyleSheet.create({
    mainview: {
        flex: 1
    }
});

export default PolicyIntroductionScreen; // Export the policy introduction screen