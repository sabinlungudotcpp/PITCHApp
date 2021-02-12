import {View, StyleSheet, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import Card from '../components/Card';
import ModuleData from '../data/ModuleData';

const ModulesScreen = ({props, navigation, item}) => { // Modules Screen Component
    return (
        <ScrollView>
            <Card style = {styles.cardContainer}>
                <FlatList data = {ModuleData} renderItem = {({item}) => <Text style = {styles.protectionTitle}>{item.module_protection}</Text>} /> 
                <Image style = {{width: 270, height: 190, marginTop: -230, marginBottom: 35}} source = {require('../assets/Images/ChildProtection.jpg')}/>

                <View style = {styles.buttonContainer}>
                  <Button buttonStyle = {{backgroundColor: '#F7B500', width: 200, borderRadius: 200, marginLeft: -1}} title = "View Module" onPress = {() => {}} />
            </View>
        </Card>

        {/* Renders a card that stores the title of the module, image and the button that allows users to view that module */}
        <Card style = {styles.cardContainer}>
            <FlatList data = {ModuleData} renderItem = {({item}) => <Text style = {styles.shaktiTitle}>{item.module_shakti}</Text>} /> 
                <Image style = {{width: 270, height: 200, marginTop: -250, marginBottom: 25}} source = {require('../assets/Images/ShaktiImg.jpg')}/>

                <View style = {styles.buttonContainer}>
                  <Button buttonStyle = {{backgroundColor: '#F7B500', width: 200, borderRadius: 200, marginLeft: -1}} title = "View Module" onPress = {() => {}} />
            </View>
        </Card>


         {/* Renders a card that stores the title of the module, image and the button that allows users to view that module */}
         <Card style = {styles.cardContainer}>
            <FlatList data = {ModuleData} renderItem = {({item}) => <Text style = {styles.shaktiTitle}>{item.module_edukick}</Text>} /> 
                <Image style = {{width: 270, height: 180, marginTop: -230, marginBottom: 30}} source = {require('../assets/Images/EduKickImg.jpg')}/>

                <View style = {styles.buttonContainer}>
                  <Button buttonStyle = {{backgroundColor: '#F7B500', width: 200, borderRadius: 200, marginLeft: -1}} title = "View Module" onPress = {() => {}} />
            </View>
        </Card>


    </ScrollView>
    )
};

const styles = StyleSheet.create({ // Styles for the module screen
    protectionTitle: {
        textAlign: 'center',
        fontSize: 27,
        marginTop: -1,
        marginBottom: -20,
        left: -1,
        color: '#F7B500'
    },

    shaktiTitle: {
        textAlign: 'center',
        fontSize: 27,
        marginTop: 5,
        marginBottom: -20,
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
});

export default ModulesScreen;