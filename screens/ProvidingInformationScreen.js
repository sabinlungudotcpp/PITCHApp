import React from 'react';
import {View, StyleSheet, FlatList, Image, Text, Platform, Modal, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import ChildProtectionData from '../data/ChildProtectionData';
import Card from '../components/Card';

const ProvidingInformationScreen = ({props, navigation, item}) => {
    return (
        <SafeAreaView style = {styles.defaultView}>
            <ScrollView>
                <Text style = {styles.providingInfoHeader}>{ChildProtectionData.map(value => value.title_providing_information)}</Text>

                <Image />

                <Card style = {styles.cardStyle}>

                </Card>

                <View style = {styles.btnContainer}>
                    <Button onPress = {() => {}} title = "Back" />
                    <Button onPress = {() => {}} title = "View Information" />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    defaultView: {
        flex: 1
    },

    providingInfoHeader: {
        textAlign: 'center',
        color: Colors.primaryColor,
        fontSize: 29,
        marginTop: 60
    }
});

export default ProvidingInformationScreen;