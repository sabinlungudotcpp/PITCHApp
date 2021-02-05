import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';

const LoginScreen = ({props, navigation}) => { // Login Screen component
    return (
        <View style = {style.mainView}>
            <Text>Login Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    mainView: {
        flex: 1
    }
});

export default LoginScreen;