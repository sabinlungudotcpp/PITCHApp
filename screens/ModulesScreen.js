import {View, StyleSheet, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import Card from '../components/Card';
import ModuleData from '../data/ModuleData';
import Colors from '../constants/Colors';
import EstablishStreetSoccer from '../data/EstablishStreetSoccerData';

const MODULE_SIZES = {
    defaultWidth: 200,
    borderRadius: 200,
    marginLeft: -1
}

/**
 * @fileoverview
 * @author: Sabin Constantin Lungu
 * @param {navigation}: navigation: prop parameter used to pass data between components (if required)
 * @param {props}: props: parameter is used to store the properties from other components  
 * @returns: A scrollview screen that renders a card that stores the necessary data rendered from a JSON file.
 */

const ModulesScreen = ({props, navigation, item}) => { // Modules Screen Component

    const renderChildProtectionModule = () => {
        return (
            <Card style = {styles.cardContainer}>
                <FlatList data = {ModuleData} renderItem = {({item}) => <Text style = {styles.protectionTitle}>{item.module_protection}</Text>} /> 
                <Image style = {{width: 270, height: 190, marginTop: -215, marginBottom: 25}} source = {require('../assets/Images/ChildProtection.jpg')}/>

                <View style = {styles.buttonContainer}>
                  <Button buttonStyle = {{backgroundColor: Colors.primaryColor, width: MODULE_SIZES.defaultWidth, borderRadius: MODULE_SIZES.borderRadius, marginLeft: -1}} title = "View Module" onPress = {() => navigation.navigate('ChildProtectionScreen')} />
            </View>
        </Card>
        )
    }

    const renderShaktiModule = () => {
        return (
            <Card style = {styles.cardContainer}>
                <FlatList data = {ModuleData} renderItem = {({item}) => <Text style = {styles.shaktiTitle}>{item.module_shakti}</Text>} /> 
                    <Image style = {{width: 270, height: 200, marginTop: -250, marginBottom: 15}} source = {require('../assets/Images/ShaktiImg.jpg')}/>

                    <View style = {styles.buttonContainer}>
                    <Button buttonStyle = {{backgroundColor: Colors.primaryColor, width: MODULE_SIZES.defaultWidth, borderRadius: MODULE_SIZES.borderRadius, marginLeft: MODULE_SIZES.marginLeft, marginTop: 5}} title = "View Module" onPress = {() => navigation.navigate('ShaktiFellowshipScreen')} />
                </View>
            </Card>
        )
    }

    const renderEduKickModule = () => {

        return (
            
        <Card style = {styles.cardContainer}>

            <FlatList data = {ModuleData} renderItem = {({item}) => <Text style = {styles.eduKickTitle}>{item.module_edukick}</Text>} /> 
                <Image style = {{width: 270, height: 180, marginTop: -230, marginBottom: 30}} source = {require('../assets/Images/EduKickImg.jpg')}/>

                <View style = {styles.buttonContainer}>
                <Button buttonStyle = {{backgroundColor: Colors.primaryColor, width: 200, borderRadius: 200, marginLeft: -1}} title = "View Module" onPress = {() => navigation.navigate('EdukickScreen')} />
            </View>
        </Card>

        )
    }

    return (
        <ScrollView>
            {renderChildProtectionModule()}
            {renderShaktiModule()}
            {renderEduKickModule()}
    </ScrollView>
    )
};

const styles = StyleSheet.create({ // Styles for the modules screen
    protectionTitle: {
        textAlign: 'center',
        fontSize: 27,
        marginTop: -1,
        marginBottom: 15,
        left: -1,
        color: '#F7B500'
    },

    shaktiTitle: {
        textAlign: 'center',
        fontSize: 27,
        marginTop: -5,
        marginBottom: Platform.OS === 'android' ? -19 : -20,
        left: -1,
        color: '#F7B500'
    },

    modulesScreen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        marginTop: -1,
        right: 10
    },

    establishImg: {
        width: 250,
        height: 150,
        marginBottom: 50
    },

    cardContainer: {
        width: 340,
        left: -40,
        height: 360,
        maxWidth: '100%',
        alignItems: 'center',
        marginLeft: 77,
        marginBottom: 20,
        top: 10
    },

    establishTxt: {
        fontSize: 27,
        top: 1,
        color: Colors.primaryColor
    },

    eduKickTitle: {
        textAlign: 'center',
        fontSize: 27,
        marginTop: -5,
        marginBottom: Platform.OS === 'android' ? -20 : -20,
        left: -1,
        color: '#F7B500'
    }
});

export default ModulesScreen; // Exports the Module Screen