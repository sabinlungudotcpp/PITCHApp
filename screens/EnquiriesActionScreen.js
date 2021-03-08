import React from 'react';
import {View, StyleSheet, ScrollView, Text, Platform, FlatList, Image} from 'react-native';
import {Button} from 'react-native-elements';
import ChildProtectionData from '../data/ChildProtectionData';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EnquiriesActionScreen = ({props, navigation, item}) => { // Enquiries and Actions Screen

    return (
        <ScrollView>
            <Text style = {styles.enquiriesTxt}>{ChildProtectionData.map(value => value.enquiries_title)}</Text>
                <Image style = {styles.enquiriesImg} source = {require('../assets/Images/ImageEnquiries.jpg')} />

            <Card style = {styles.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.enquiriesTxtStyle}>{item.enquiries_description}</Text>} />
            </Card>

            <Card style = {styles.cardStyle}>

            </Card>

            <View style = {styles.btnContainer}>
                <Button onPress = {() => {}} title = "Back" buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} style = {styles.backBtn} />

                <TouchableOpacity onPress = {() => {}}>
                        <Button title = "Next Policy" style = {styles.nextPolicyBtn} />
                </TouchableOpacity>
                
            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    enquiriesTxt: {
        textAlign: 'center',
        marginTop: 60,
        color: Colors.primaryColor,
        fontSize: 31
    },

    enquiriesImg: {
        width: 290,
        height: 180,
        marginLeft: 60,
        marginTop: 30
    },

    cardStyle: {
        padding: 10, 
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 1,
        width: 340,
        height: 160,
        marginLeft: 45,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    enquiriesTxtStyle: {
        marginTop: -13.5
    }
});

export default EnquiriesActionScreen;