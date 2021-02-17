import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import introductionData from '../data/IntroductionData';

const ChildProtectionScreen = ({props, navigation, item}) => {
    return (
       <ScrollView>
            <Text style = {styles.childProtectionTxt}>Child Protection</Text>

            <View>
                <Image style = {styles.img} source = {require('../assets/Images/ImageChildProtection.jpg')}/>
            </View>

            <Card style = {styles.cardStyle}>
                <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {styles.childProtectionText}>{item.module_text}</Text>} keyExtractor = {(item) => item.id} />
            </Card>

            <View style = {styles.btnContainers}>
                <Button style = {styles.policyBtn} buttonStyle = {{backgroundColor: '#F7B500', theme: 'dark', borderRadius: 200}} title = "View Policy"/>
                <Button style = {styles.guidelineBtn} buttonStyle = {{backgroundColor: '#F7B500', theme: 'dark', borderRadius: 200}} title = "Guidelines" />
            </View>


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
        width: 150,
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 60,
        marginTop: 10,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },

    policyBtn: {
         width: 150,
         right: -5,
         left: -10,
         marginLeft: 5,
         color: 'black',
         textAlign: 'center'
    },

    childProtectionText: {
        fontSize: 15,
        paddingLeft: 10
    },

    guidelineBtn: {
         width: 150,
         right: -5,
         left: -10,
         marginLeft: 30,
         color: 'black',
         textAlign: 'center'
    }
});

export default ChildProtectionScreen;