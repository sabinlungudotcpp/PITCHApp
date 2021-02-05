import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const IntroductionScreen = ({props, navigation}) => {
    return (
        <View style = {styles.mainview}>
            <FlatList />
        </View>
    )
}

const styles = StyleSheet.create({
    mainvie: {

    }
});

export default IntroductionScreen;