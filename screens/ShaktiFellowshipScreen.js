import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Colors from '../constants/Colors';

const ShaktiFellowshipScreen = ({props, navigation, item}) => {
    return (
        <ScrollView>
            <Text style = {styles.mainTxt}>Shakti Screen</Text>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainTxt: {
        fontSize: 28,
        color: Colors.primaryColor,
        textAlign: 'center',
        marginTop: 30
    }
})

export default ShaktiFellowshipScreen;