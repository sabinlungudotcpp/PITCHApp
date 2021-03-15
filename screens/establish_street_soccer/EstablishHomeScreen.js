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
                </Modal>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.streetSoccerDescription}>{item.street_soccer_description}</Text>} />
                </Card>

                <View style = {styles.btnContainer}>
                    <Button onPress = {() => setModalOpen(true)} style = {styles.processesBtn} buttonStyle = {{backgroundColor: Colors.secondaryColor, borderRadius: 200}} title = "View Processes" />
                </View>

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
        width: 160,
        marginTop: 50,
        marginLeft: 130
    },

    processTxt: {
        textAlign: 'center'
    }
});

export default EstablishHomeScreen;