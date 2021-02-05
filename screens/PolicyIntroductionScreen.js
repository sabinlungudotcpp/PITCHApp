import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Button} from 'react-native-elements';

const PolicyIntroductionScreen = ({props, navigation}) => {
    return (
        <View style = {style.mainview}>
            <FlatList/>
        </View>
    )
}

const style = StyleSheet.create({
    mainview: {
        
    }
});

export default PolicyIntroductionScreen;