import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';

const ShaktiFellowshipScreen = ({props, navigation, item}) => {
    return (
        <View>
            <Text style = {styles.mainTxt}>Shakti Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainTxt: {
        fontSize: 24,
        color: Colors.primaryColor
    }
})

export default ShaktiFellowshipScreen;