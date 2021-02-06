import React from 'react';
import {Text, Image, StyleSheet, FlatList, View} from 'react-native';
import {Button} from 'react-native-elements';

const GoodPracticeScreen = ({props, navigation}) => {
    return (
        <View styles = {styles.mainview}>
            <FlatList />
        </View>
    )
}

const styles = StyleSheet.create({
    mainview: {
        
    }
});

export default GoodPracticeScreen;