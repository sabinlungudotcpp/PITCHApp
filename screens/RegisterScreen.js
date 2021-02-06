import React from 'react';
import {View, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';

// Author of file: Sabin Constantin Lungu
// Errors: N/A
// Date of last modification: 05/02/2021
// Description: Stores the required code to implement the Register Screen

const RegisterScreen = ({props}) => {
    return (
        <View style = {styles.mainView}>
            <Text>Register Screen</Text>
        </View>
    )
};

RegisterScreen.navigationOptions = {
    headerTitle: 'Register'
}

const styles = StyleSheet.create({
    mainView: {
        
    }
});

export default RegisterScreen;