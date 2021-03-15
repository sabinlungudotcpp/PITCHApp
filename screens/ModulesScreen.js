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

const ModulesScreen = ({props, navigation, item}) => { // Modules Screen Component
    return (
        <ScrollView>
            <Card style = {styles.cardContainer}>
                <FlatList data = {ModuleData} renderItem = {({item}) => <Text style = {styles.protectionTitle}>{item.module_protection}</Text>} /> 
                <Image style = {{width: 270, height: 190, marginTop: -215, marginBottom: 25}} source = {require('../assets/Images/ChildProtection.jpg')}/>

                <View style = {styles.buttonContainer}>
                  <Button buttonStyle = {{backgroundColor: Colors.primaryColor, width: MODULE_SIZES.defaultWidth, borderRadius: MODULE_SIZES.borderRadius, marginLeft: -1}} title = "View Module" onPress = {() => navigation.navigate('ChildProtectionScreen')} />
            </View>
        </Card>
        

        {/* Renders a card that stores the title of the module, image and the button that allows users to view that module */}
        <Card style = {styles.cardContainer}>
            <FlatList data = {ModuleData} renderItem = {({item}) => <Text style = {styles.shaktiTitle}>{item.module_shakti}</Text>} /> 
                <Image style = {{width: 270, height: 200, marginTop: -250, marginBottom: 15}} source = {require('../assets/Images/ShaktiImg.jpg')}/>

                <View style = {styles.buttonContainer}>
                  <Button buttonStyle = {{backgroundColor: Colors.primaryColor, width: MODULE_SIZES.defaultWidth, borderRadius: MODULE_SIZES.borderRadius, marginLeft: MODULE_SIZES.marginLeft, marginTop: 5}} title = "View Module" onPress = {() => navigation.navigate('ShaktiFellowshipScreen')} />
            </View>
        </Card>

         {/* Renders a card that stores the title of the module, image and the button that allows users to view that module */}
         <Card style = {styles.cardContainer}>
            <FlatList data = {ModuleData} renderItem = {({item}) => <Text style = {styles.shaktiTitle}>{item.module_edukick}</Text>} /> 
                <Image style = {{width: 270, height: 180, marginTop: -230, marginBottom: 30}} source = {require('../assets/Images/EduKickImg.jpg')}/>

                <View style = {styles.buttonContainer}>
                  <Button buttonStyle = {{backgroundColor: Colors.primaryColor, width: 200, borderRadius: 200, marginLeft: -1}} title = "View Module" onPress = {() => navigation.navigate('EdukickScreen')} />
            </View>
        </Card>


        {/* Rendered card for establishing street soccer */}
        <Card style = {styles.cardContainer}>
            <FlatList data = {EstablishStreetSoccer} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.establishTxt}>{item.title}</Text>} />
            <Image style = {styles.establishImg} source = {(require('../assets/Images/ImageEstablishStreetSoccer.jpg'))} />

            <View style = {styles.buttonContainer}>
                <Button onPress = {() => navigation.navigate('EstablishHomeScreen')} style = {styles} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 200}} title = "View Module" />
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
        marginBottom: 15,
        left: -1,
        color: '#F7B500'
    },

    shaktiTitle: {
        textAlign: 'center',
        fontSize: 27,
        marginTop: -5,
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
    }
});

export default ModulesScreen; // Exports the Module Screen