import React from 'react';
import {View, StyleSheet, FlatList, Image, Text, Platform, Modal, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import ChildProtectionData from '../data/ChildProtectionData';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProvidingInformationScreen = ({props, navigation, item}) => {
    return (
        <SafeAreaView style = {styles.defaultView}>
            <ScrollView>
                <Text style = {styles.providingInfoHeader}>{ChildProtectionData.map(value => value.title_providing_information)}</Text>

                <Image />

                <Card style = {styles.cardStyle}>

                </Card>

                <View style = {styles.btnContainer}>
                    <Button style = {styles.backBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} onPress = {() => navigation.navigate('ReportingConcernsScreen')} title = "Back" />

                    <TouchableOpacity onPress = {() => {}} >
                         <Button style = {styles.viewInfoBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} title = "View Information" />
                    </TouchableOpacity>
                    
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
    },

    backBtn: {

    },

    viewInfoBtn: {
        
    }
});

export default ProvidingInformationScreen;