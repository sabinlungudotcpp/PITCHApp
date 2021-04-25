import React, { useState } from 'react';
import {ScrollView, Text, FlatList, Platform, StyleSheet, Image, SafeAreaView, View, Modal, Pressable} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SIZES = {
    borderRadius: 200
}

const BullyingScreen = ({item, navigation}) => { // Bullying Screen

    return (

    <SafeAreaView style = {styles.safeView}>

        <ScrollView>
            <Text style = {styles.bullyingTxt}>{ChildProtectionData.map(title => title.title_bullying)}</Text>
            <Image style = {styles.bullyingImg} source = {(require('../assets/Images/ImageBullying.jpg'))} />
            
            <Card style = {styles.cardStyles}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.bullyingText}>{item.bullying_text}</Text>} />
            </Card>

            <View style = {styles.btnContainer}>
                <Button onPress = {() => navigation.navigate('EnquiriesActionScreen')} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius, width: Platform.OS === 'android' ? 115 : null, marginRight: 40, marginLeft: 10}} style = {styles.backBtn} title = "Back" />

                <TouchableOpacity onPress = {() => navigation.navigate('ReportingConcernsScreen')} >
                    <Button buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius, width: Platform.OS === 'android' ? 125 : null}} style = {styles.nextPolicyBtn} title = "Next Policy" />
                </TouchableOpacity>

            </View>

        </ScrollView>
    </SafeAreaView>
        
    )
};

const styles = StyleSheet.create({
    bullyingTxt: {
        fontSize: 31,
        color: Colors.primaryColor,
        textAlign: 'center',
        marginTop: 30
    },

    safeView: {
        flex: 1
    },
    
    cardStyles: {
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

    bullyingText: {
        fontSize: 15,
        marginTop: Platform.OS === 'android' ? -19.5 : -13.5
    },

    bullyingImg: {
        width: 300,
        height: 170,
        marginLeft: 60,
        marginTop: 30
    },

    closeModalTxt: {
        fontSize: 24,
        color: '#00479e',
        textAlign: 'center',
    },

    btnContainer: { // Styles for the button container
        width: 110, // Width of the container is 120
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 30,
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
        width: 190,
        marginLeft: 30,
        marginRight: -30
    },

    nextPolicyBtn: {
        width: 150,
        marginLeft: 20
    }
});

export default BullyingScreen;