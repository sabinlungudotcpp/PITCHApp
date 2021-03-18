import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Platform, Modal, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Card from '../../components/Card';
import Colors from '../../constants/Colors';
import EstablishStreetSoccerData from '../../data/EstablishStreetSoccerData';

const BUTTON_CONFIG = {
    width: 150,
    borderRadius: 200,
    marginLeft: 140,
    marginTop: 50
}

const SessionsPartnershipsScreen = ({navigation, props}) => {
    const [modalOpen, setModalOpen] = useState(false);


    function nextProcessHandler() {
        setModalOpen(false);
        navigation.navigate('CoachesRecruitmentScreen');
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Text style = {styles.existingSessionTxt}>{EstablishStreetSoccerData.map(title => title.sessions_title)}</Text>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.existingText}>{item.existing_sessions_text}</Text>}  />
                </Card>

                <Modal animationType = {"slide"} transparent = {false} visible = {modalOpen} >
                    <Text style = {styles.facilitiesTitle}>{EstablishStreetSoccerData.map(title => title.facilities_title)}</Text>

                    <Card style = {styles.cardStyle}>
                        <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.facilitiesTxt}>{item.facilities_text}</Text>} />
                    </Card>

                    <Text style = {styles.rentalTxtTitle}>{EstablishStreetSoccerData.map(title => title.rental_title)}</Text>

                    <Card style = {styles.cardStyle}>
                        <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.rentalTxt}>{item.rental_text}</Text>} />
                    </Card>

                <View style = {styles.buttonContainer}>
                     <Button style = {styles.btnBack} buttonStyle = {{width: BUTTON_CONFIG.width, borderRadius: BUTTON_CONFIG.borderRadius, marginLeft: BUTTON_CONFIG.marginLeft, marginTop: BUTTON_CONFIG.marginTop}} onPress = {() => setModalOpen(false)} title = "Back"/>
                     <Button style = {styles.processNextButton} buttonStyle = {{width: BUTTON_CONFIG.width, borderRadius: BUTTON_CONFIG.borderRadius, marginLeft: BUTTON_CONFIG.marginLeft, marginTop: BUTTON_CONFIG.marginTop}} onPress = {nextProcessHandler} title = "Next Processes"/>
                </View>

             </Modal>

                <Text style = {styles.partnershipTitle}>{EstablishStreetSoccerData.map(title => title.partnerships_title)}</Text>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.partnershipTxt}>{item.partnerships_text} {item.partnerships_text_sub}</Text>} />
                </Card>

                <View style = {styles.btnContainer}>
                    <Button style = {styles.backBtn} onPress = {() => navigation.navigate('EstablishHomeScreen')} buttonStyle = {{borderRadius: 200}} title = "Back" />
                    <Button style = {styles.viewMoreBtn} onPress = {() => setModalOpen(true)} buttonStyle = {{borderRadius: 200}} title = "View More" />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    existingSessionTxt: {
        textAlign: 'center',
        marginTop: 70,
        fontSize: 29,
        color: Colors.secondaryColor
    },

    existingText: {
        fontSize: 14,
        marginTop: -11.5,
        padding: -5
    },

    cardStyle: {
        width: 365,
        marginLeft: 37,
        height: 180,
        maxWidth: '100%',
        alignItems: 'center'
    },

    partnershipTitle: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 29,
        color: Colors.secondaryColor
    },

    partnershipTxt: {
        marginTop: -14,
        fontSize: 14
    },

    rentalTxtTitle: {
        textAlign: 'center',
        marginTop: 40,
        marginRight: 10,
        fontSize: 29,
        color: Colors.secondaryColor
    },

    rentalTxt: {
        marginTop: -12,
        fontSize: 15
    },

    btnContainer: {
        width: 110,
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: -80,
        marginTop: 35,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        marginBottom: 50  
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -80
    },

    facilitiesTitle: {
        fontSize: 29,
        textAlign: 'center',
        marginTop: 100,
        color: Colors.secondaryColor
    },

    facilitiesTxt: {
        marginTop: -12,
        fontSize: 15
    },

    backBtn: {
        width: 130,
        marginLeft: 150
    },

    btnBack: {
        marginRight: 20,
        marginBottom: 40
    },

    processNextButton: {
        alignItems: 'center',
        marginLeft: -130,
        marginBottom: 40
    },

    viewMoreBtn: {
       width: 150,
       marginLeft: 25
    }
});

export default SessionsPartnershipsScreen; // Ep