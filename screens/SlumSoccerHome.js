import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';

const SlumSoccerHome = ({props, navigation}) => {
    return (
        <View>
            <Text style = {styles.introTxt}>Slum Soccer Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    introTxt: {
        textAlign: 'center',
        fontSize: 22,
        marginTop: 25
    }
});

export default SlumSoccerHome;