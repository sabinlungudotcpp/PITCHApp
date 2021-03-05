/*
    Author of application: Sabin Constantin Lungu
    Purpose of File: To display the content required for the recruitment guidelines screen
    Date of last modification: 26/02/2021
    Any errors: N/A
    All Rights Reserved - Sabin Constantin Lungu 2021 PITCH Application
*/

import React from 'react';
import {View, ScrollView, StyleSheet, FlatList, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../../components/Card';
import ChildProtectionData from '../../data/ChildProtectionData';
import Colors from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

const SIZES = { // Sizez to be used throughout the application
    borderRadius: 200,
    fontSize: 14.5,
    marginLeft: 35
}

const RecruitmentGuidelines = ({props, navigation, items}) => { // Recruitment Guidelines component

    try {
        return (

        <ScrollView>
            <Text style = {style.guidelineTitle}>{ChildProtectionData.map(data => data.guideline_title)}</Text>

            <Card style = {style.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.guidelineDescriptionTxt}>{item.guideline_description}</Text>}/>
            </Card>

            <Card style = {style.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => item.id >= 8 && item.id <= 12 ? <Text>{item.guideline_list}</Text> : null} />
            </Card>

            <Text style = {style.trainingTxt}>{ChildProtectionData.map(data => data.guideline_training)}</Text>

            <Card style = {style.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => item.id >= 14 || item.id <= 21 ? <Text style = {style.trainingItemListTxt}>{item.training_list}</Text> : null} />
            </Card>

            <View style = {style.buttonContainer}>
                <Button onPress = {() => navigation.navigate('RecruitmentScreen')} buttonStyle = {{marginLeft: Platform.OS === 'android' ? 20 : null, width: Platform.OS === 'android' ? 120 : null ,backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} style = {style.backBtn} title = "Back"/>

            <TouchableOpacity onPress = {() => navigation.navigate('AllegationsScreen')}>
                <Button buttonStyle = {{marginLeft: Platform.OS === 'android' ? 30 : null, width: Platform.OS === 'android' ? 120 : null, backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} style = {style.nextPolicyBtn} title = "Next Policy" />
            </TouchableOpacity>

            </View>
        </ScrollView>

        )
    } 
    
    catch(error) {

        if(error) {
            return console.log(error);
        }
    }
};

const style = StyleSheet.create({
    guidelineTitle: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 31,
        color: Colors.primaryColor
    },

    cardStyle: {
        padding: 10, // Has a padding space of 12
        paddingLeft: -40, // Padding left of -40
        paddingBottom: -5,
        marginBottom: 1,
        width: 340,
        height: 140,
        marginLeft: 45,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    guidelineDescriptionTxt: {
        marginTop: Platform.OS === 'android' ? -15 : -12,
        fontSize: SIZES.fontSize
    },

    trainingTxt: {
        textAlign: 'center',
        fontSize: 31,
        marginTop: 45,
        color: Colors.primaryColor
    },

    buttonContainer: { // Styles for the button container
        flex: 1,
        justifyContent: 'center',
        width: 130,
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 47,
        marginTop: 35,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        marginBottom: 50
    },

    backBtn: {
        width: 180,
        borderRadius: 200,
        color: 'black',
        paddingLeft: 10,
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        color: 'black',
        left: 25,
        paddingLeft: 10,
        paddingHorizontal: 20,
        marginRight: 5,
        marginLeft: -40,
    },

    nextPolicyBtn: {
        width: 160,
        right: -5,
        left: -10,
        marginLeft: SIZES.marginLeft,
        color: Colors.black,
        textAlign: 'center'
    },

    trainingItemListTxt: {
        marginTop: Platform.OS === 'android' ? -17 : 9,
        marginBottom: -27
    }
})

export default RecruitmentGuidelines; // Exports the screen to be re-used