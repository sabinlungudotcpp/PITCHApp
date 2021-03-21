import React, {useState} from 'react';
import {FlatList, Image, View, StyleSheet, Text, Platform, Modal, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../../constants/Colors';
import Card from '../../components/Card';
import EstablishStreetSoccerData from '../../data/EstablishStreetSoccerData';


/**
 * @fileoverview
 * @author: Sabin Constantin Lungu
 * @param {navigation}: navigation: prop parameter used to pass data between components (if required)
 * @param {props}: props: parameter is used to store the properties from other components  
 * @returns: A scrollview screen that renders a card that stores the necessary data rendered from a JSON file.
 */

const EstablishHomeScreen = ({props, navigation}) => { // Establish Home Screen

    const [modalOpen, setModalOpen] = useState(false); // State for managing the modal

    const renderButtons = () => { // Renders the buttons on the screen
        return (
            <View style = {styles.btnContainer}>
                <Button onPress = {() => setModalOpen(true)} style = {styles.processesBtn} buttonStyle = {{marginLeft: Platform.OS === 'android' ? 155 : null,width: Platform.OS === 'android' ? 130 : null, backgroundColor: Colors.secondaryColor, borderRadius: 200}} title = "View Process" />
                <Button onPress = {() => navigation.navigate('SessionsPartnershipsScreen')} style = {styles.processNxtBtn} buttonStyle = {{width: Platform.OS === 'android' ? 130 : null, marginLeft: Platform.OS === 'android' ? 30: null, backgroundColor: Colors.secondaryColor, borderRadius: 200}} title = "Next Process" />
            </View>
        )
    }

    const renderModal = () => { // Function called to render the modal onto the screen
        return (
            <Modal transparent = {false} visible = {modalOpen} animationType = {"slide"}>
                <Text style = {styles.processTxt}>The Process</Text>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.processDescription}>{item.process_description}</Text>} />
                </Card>

                <View style = {styles.btnContainer}>
                    <Button onPress = {() => {}} style = {styles.nextProcessBtn} buttonStyle = {{borderRadius: 200}} title = "Next Process" />
                </View>

                <Text style = {styles.targetGroupsTxt}>Target Groups</Text>

                <Card style = {styles.cardStyle}>
                        <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.targetGroupTxtStyle}>{item.target_group_text}</Text>} />
                </Card>

                <Button onPress = {() => setModalOpen(false)} buttonStyle = {{width: 150, borderRadius: 200, marginLeft: 140, marginTop: 40}} title = "Back" />
            </Modal>
        )
    }

    return (
        <SafeAreaView style = {styles.defaultView}>

            <ScrollView>

                <Text style = {styles.titleWhat}>{EstablishStreetSoccerData.map(data => data.title_what)}</Text>
                    <Image style = {styles.streetSoccerImg} source = {(require('../../assets/Images/ImageStreetSoccer.png'))} />

                    {renderModal()}

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.streetSoccerDescription}>{item.street_soccer_description}</Text>} />
                </Card>

                {renderButtons()}

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    defaultView: { // Default style view
        flex: 1
    },

    streetSoccerImg: { // Styles for the Street Soccer Image
        width: 260, // Has a width of 260 pixels
        height: 150,
        marginLeft: 80, // Margin left of 80 pixels
        marginTop: 20
    },

    cardStyle: { // Styles for the card that contains the flat list
        padding: 10,  // Padding of 10
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

    titleWhat: {
        textAlign: 'center',
        fontSize: 27,
        color: '#2e86de',
        marginTop: 60
    },

    streetSoccerDescription: {
        marginTop: -5
    },

    processesBtn: {
        width: 175,
        marginTop: 10,
        marginLeft: 130
    },

    processTxt: {
        textAlign: 'center',
        marginTop: 80,
        fontSize: 29,
        color: Colors.secondaryColor
    },

    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 40,
        marginLeft: -90
    },
    
    secondContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 40,
        marginLeft: -90
    },

    processDescription: {
        marginTop: -8,
        fontSize: 16
    },

    backBtn: {
        width: 145,
        marginTop: 10,
    },

    nextProcessBtn: {
        width: 150,
        marginLeft: 230,
        marginRight: 30,
        marginTop: 10
    },

    targetGroupsTxt: {
        textAlign: 'center',
        fontSize: 29,
        color: Colors.secondaryColor,
        marginTop: 20
    },

    targetGroupTxtStyle: {
        marginTop: -10,
        fontSize: 16,
        padding: 1
    },

    processNxtBtn: {
        marginLeft: 20,
        width: 165,
        marginTop: 5
    }
});

export default EstablishHomeScreen;