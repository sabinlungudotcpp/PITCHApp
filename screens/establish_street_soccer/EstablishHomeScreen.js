import React, {useState} from 'react';
import {FlatList, Image, View, StyleSheet, Text, Platform, Modal, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../../constants/Colors';
import Card from '../../components/Card';
import EstablishStreetSoccerData from '../../data/EstablishStreetSoccerData';

const EstablishHomeScreen = ({props, navigation, item}) => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <SafeAreaView style = {styles.defaultView}>
            <ScrollView>
                <Text style = {styles.titleWhat}>{EstablishStreetSoccerData.map(data => data.title_what)}</Text>
                <Image style = {styles.streetSoccerImg} source = {(require('../../assets/Images/ImageStreetSoccer.png'))} />

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
                        <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} />
                </Card>

                <Button onPress = {() => setModalOpen(false)} buttonStyle = {{width: 150, borderRadius: 200, marginLeft: 140, marginTop: 40}} title = "Back" />
            </Modal>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.streetSoccerDescription}>{item.street_soccer_description}</Text>} />
                </Card>

                <Button onPress = {() => setModalOpen(true)} style = {styles.processesBtn} buttonStyle = {{backgroundColor: Colors.secondaryColor, borderRadius: 200}} title = "View Processes" />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    defaultView: {
        flex: 1
    },

    streetSoccerImg: {
        width: 260,
        height: 150,
        marginLeft: 80,
        marginTop: 20
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
        marginTop: 50,
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
    }
});

export default EstablishHomeScreen;