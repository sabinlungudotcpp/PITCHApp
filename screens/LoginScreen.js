import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';

const LoginScreen = ({props, navigation}) => { // Login Screen component
    return (
        <View style = {style.mainView}>
           
        </View>
    )
}

LoginScreen.navigationOptions = {
    headerTitle: 'PITCH'
}

const style = StyleSheet.create({
    mainView: {
        flex: 1
    }
});

export default LoginScreen;