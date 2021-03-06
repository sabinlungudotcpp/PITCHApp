import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/Card';
import introductionData from '../data/IntroductionData';
import Colors from '../constants/Colors';

const SIZES = {
    borderRadius: 200,
    width: 135
}

const ChildProtectionScreen = ({props, navigation, item}) => { // The child protection screen

    const renderButtons = () => {
        return (
            <View style = {styles.btnContainers}>
                <Button style = {styles.policyBtn} buttonStyle = {{width: Platform.OS === 'android' ? SIZES.width : null, marginLeft: Platform.OS === 'android' ? 15 : null, marginRight: Platform.OS === 'android' ? 30 : null, backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.primaryColor, theme: 'dark', borderRadius: SIZES.borderRadius}} title = "View Policy" onPress = {() => navigation.navigate('IntroductionScreen')} />

                <TouchableOpacity onPress = {() => navigation.navigate('')}>
                     <Button style = {styles.guidelineBtn} buttonStyle = {{width: Platform.OS === 'android' ? SIZES.width : null, backgroundColor: Colors.primaryColor, theme: 'dark', borderRadius: 200}} title = "Guidelines" />
                </TouchableOpacity>
            </View>
        )
    }

    return (

       <ScrollView>
            <Text style = {styles.childProtectionTxt}>Child Protection</Text>

            <View>
                <Image style = {styles.img} source = {require('../assets/Images/ImageChildProtection.jpg')}/>
            </View>

            <Card style = {styles.cardStyle}>
                <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {styles.childProtectionText}>{item.module_text}</Text>} keyExtractor = {(item) => item.id} />
            </Card>

            {renderButtons()}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    childProtectionTxt: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 33,
        color: '#F7B500'
    },

    img: { // Style for the image of child protection
        width: 320,
        height: 170,
        marginLeft: 50,
        marginTop: 25
    },

    cardStyle: {
        padding: -3,
        paddingLeft: -40,
        marginBottom: 40,
        width: 370,
        height: 180,
        marginLeft: 30,
        marginTop: 40,
        alignItems: 'center',
        maxWidth: '100%'
    },

    btnContainers: {
        width: 130,
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 45,
        marginTop: 10,
        marginBottom: Platform.OS === 'android' ? 50 : null,
        paddingHorizontal: -15,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 1,
    },

    policyBtn: {
         width: 160,
         right: -5,
         left: -10,
         marginLeft: -1,
         color: 'black',
         textAlign: 'center'
    },

    childProtectionText: {
        fontSize: 15.5,
        paddingLeft: 10
    },

    guidelineBtn: {
         width: 155,
         right: -5,
         left: -10,
         marginLeft: 20,
         color: 'black',
         textAlign: 'center'
    }
});

export default ChildProtectionScreen;