import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ChildProtectionScreen = ({props, navigation, item}) => {
    return (
        <View>
            <Text style = {styles.childProtectionTxt}>Child Protection Home Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    childProtectionTxt: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 24
    }
});

export default ChildProtectionScreen;