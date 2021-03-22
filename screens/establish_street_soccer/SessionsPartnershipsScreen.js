import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Platform, Modal, FlatList, Image, TouchableNativeFeedback} from 'react-native';
import {Button} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import Card from '../../components/Card';
import Colors from '../../constants/Colors';
import EstablishStreetSoccerData from '../../data/EstablishStreetSoccerData';

const BUTTON_CONFIG = {
    width: 150,
    borderRadius: 200,
    marginLeft: 150,
    marginTop: 75
}

const SessionsPartnershipsScreen = ({navigation, props}) => {
    const [modalOpen, setModalOpen] = useState(false);

    function nextProcessHandler() {
        setModalOpen(false);
        navigation.navigate('CoachesRecruitmentScreen');
    }

    const renderImage = () => {
        return (
            <TouchableOpacity onPress = {() => {}}>
                    <Image style = {styles.existingSessionsImg} source = {(require('../../assets/Images/StreetSoccerExistingSessionsImg.jpg'))} />
            </TouchableOpacity>
        )
    }

    const renderPartnershipsImg = () => {
        return (
            <Image style = {styles.partnershipImg} source = {(require('../../assets/Images/StreetSoccerPartnershipsImage.jpg'))} />
        )
    }

    const renderRentalImg = () => {
        return (
            <TouchableOpacity>
                    <Image style = {styles.rentalImgStyle} source = {(require('../../assets/Images/StreetSoccerRentalImg.jpg'))} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Text style = {styles.existingSessionTxt}>{EstablishStreetSoccerData.map(title => title.sessions_title)}</Text>
                
                {renderImage()}

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.existingText}>{item.existing_sessions_text}</Text>}  />
                </Card>

                <Modal animationType = {"slide"} transparent = {false} visible = {modalOpen} >

            <ScrollView>
                <Text style = {styles.facilitiesTitle}>{EstablishStreetSoccerData.map(title => title.facilities_title)}</Text>

                <TouchableOpacity>
                    <Image style = {styles.modalFacilitiesImg} source = {(require('../../assets/Images/StreetSoccerFacilitiesImg.jpg'))} />
                </TouchableOpacity>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.facilitiesTxt}>{item.facilities_text}</Text>} />
                </Card>

                <Text style = {styles.rentalTxtTitle}>{EstablishStreetSoccerData.map(title => title.rental_title)}</Text>

                {renderRentalImg()}

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.rentalTxt}>{item.rental_text}</Text>} />
                </Card>

                <View style = {styles.buttonContainer}>
                    <Button style = {styles.btnBack} buttonStyle = {{marginRight: Platform.OS === 'android' ? 30 : null,width: BUTTON_CONFIG.width, borderRadius: BUTTON_CONFIG.borderRadius, marginLeft: Platform.OS === 'android' ? BUTTON_CONFIG.marginLeft : null, marginTop: BUTTON_CONFIG.marginTop}} onPress = {() => setModalOpen(false)} title = "Back"/>
                    <Button style = {styles.processNextButton} buttonStyle = {{marginTop: Platform.OS === 'android' ? -100 : null, padding: Platform.OS === 'android' ? 10 : null,marginBottom: Platform.OS === 'android' ? 100 : null, width: BUTTON_CONFIG.width, borderRadius: BUTTON_CONFIG.borderRadius, marginRight: Platform.OS === 'android' ? BUTTON_CONFIG.marginLeft : null, marginTop: BUTTON_CONFIG.marginTop}} onPress = {nextProcessHandler} title = "Next Processes"/>
                </View>

                    </ScrollView>
                </Modal>
                        

                <Text style = {styles.partnershipTitle}>{EstablishStreetSoccerData.map(title => title.partnerships_title)}</Text>

                {renderPartnershipsImg()}

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.partnershipTxt}>{item.partnerships_text} {item.partnerships_text_sub}</Text>} />
                </Card>

                <View style = {styles.btnContainer}>
                    <Button style = {styles.backBtn} onPress = {() => navigation.navigate('EstablishHomeScreen')} buttonStyle = {{width: Platform.OS === 'android' ? 130 : null,borderRadius: 200, marginLeft: Platform.OS === 'android' ? 30 : null}} title = "Back" />
                    <Button style = {styles.viewMoreBtn} onPress = {() => setModalOpen(true)} buttonStyle = {{marginLeft: Platform.OS === 'android' ? 30 : null ,width: Platform.OS === 'android' ? 130 : null ,marginRight: Platform.OS === 'android' ? 40 : null ,borderRadius: 200, alignItems: Platform.OS === 'android' ? 'center' : null}} title = "View More" />
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

    existingSessionsImg: {
        width: 320,
        height: 170,
        marginLeft: 57,
        marginTop: 20
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
        width: 130,
        height: 42,
        borderRadius: 200,
        marginLeft: Platform.OS === 'android' ? 50 : -80,
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: Platform.OS === 'android' ? -10 : 10,
        marginRight: 40,
        marginBottom: 100
    },

    buttonContainer: {
        flexDirection: 'row',
        marginLeft: -100,
    },

    facilitiesTitle: {
        fontSize: 29,
        textAlign: 'center',
        marginTop: 100,
        color: Colors.secondaryColor
    },

    partnershipImg: {
        width: 320,
        height: 180,
        marginLeft: 57,
        marginTop: 20
    },

    facilitiesTxt: {
        marginTop: -12,
        fontSize: 15
    },

    backBtn: {
        width: Platform.OS === 'android' ? 120 : 150,
        marginLeft: Platform.OS === 'android' ? 145 : 145,
    },

    btnBack: {
        marginRight: 25,
        marginBottom: 40,
    },

    processNextButton: {
        alignItems: 'center',
        marginLeft: Platform.OS === 'android' ? -130 : 100,
        marginBottom: 40
    },

    viewMoreBtn: {
       width: 150,
       marginLeft: 25
    },

    modalFacilitiesImg: {
        width: 320,
        height: 170,
        marginLeft: 55,
        marginTop: 20
    },

    rentalImgStyle: {
        width: 320,
        height: 170,
        marginLeft: 55,
        marginTop: 20

    }
});

export default SessionsPartnershipsScreen; // Ep