import React from 'react';
import {View, StyleSheet, FlatList, Image, Text, Platform, Modal, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import ChildProtectionData from '../data/ChildProtectionData';

const ProvidingInformationScreen = ({props, navigation, item}) => {
    return (
        <SafeAreaView style = {styles.defaultView}>
            <ScrollView>
                <Text>Providing Information Screen</Text>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    defaultView: {
        flex: 1
    }
});

export default ProvidingInformationScreen;