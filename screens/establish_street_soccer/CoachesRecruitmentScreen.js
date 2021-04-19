import React, {useState} from "react";
import {View, StyleSheet, ScrollView, FlatList, Image, SafeAreaView, Platform, Modal, TouchableNativeFeedback, Keyboard, Text} from "react-native";
import {Button} from "react-native-elements";
import Card from "../../components/Card";
import Colors from "../../constants/Colors";
import EstablishStreetSoccerData from "../../data/EstablishStreetSoccerData";
import { TouchableOpacity } from "react-native-gesture-handler";

/**
 * @fileoverview: This file is responsible for rendering the JSX code for the Coaching Recruitment screen which allows users to view information through a card and view additional information through a modal 
 * @author: Sabin Constantin Lungu
 * @param {navigation}: navigation: prop parameter used to pass data between components (if required)
 * @param {props}: props: parameter is used to store the properties from other components 
 * @component CoachesRecruitmentScreen(): 
 * @requires: npm install 
 * @module: Card component module that is rendered throughout the screen to store a list of JSON data rendered from the file import above.
 */

const BUTTON_CONFIG = {
    width: 150,
    borderRadius: 200,
    marginLeft: 2,
    marginTop: 75
}

const CoachesRecruitmentScreen = ({navigation, props}) => {
    const [modalOpen, setModalOpen] = useState(false); // State variable for the modal

    /**
     * @function: handleModal() - Function that is invoked when the user chooses to view additional information in a modal
     * @param {}: N/A
     * @returns: True
     */

    const handleModal = () => {
        if(!modalOpen) { // If the modal is not open
            return setModalOpen(true); // Open it by setting the state to true
        }
    }

    function nextProcessHandler() {
        setModalOpen(false);
        navigation.navigate('CoachesRecruitmentScreen');
    }

    const renderCoachesImg = () => { // Renders the coaches image
        return (
            <TouchableOpacity>
               <Image style = {styles.coachImg} source = {(require('../../assets/Images/StreetSoccerCoachesImg.jpg'))} />
            </TouchableOpacity>
        )
    }

    const renderCoachesList = () => { // Renders the data for the coaches in a flat list that renders JSON
        return (
            <Card style = {styles.cardStyle}>
                <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.coachesTextStyle}>{item.coaches_text}</Text>} />
            </Card>
        )
    }

    const renderRecruitmentImg = () => { // Renders the recruitment image
        return (
            <TouchableOpacity>
                <Image style = {styles.recruitmentImg} source = {(require('../../assets/Images/StreetSoccerRecruitmentImg.jpg'))} />
            </TouchableOpacity>
        )
    }

    const renderTimingImage = () => {
        return (
            <TouchableOpacity>
                <Image style = {styles.timingImg} source = {(require('../../assets/Images/StreetSoccerTimingImg.jpeg'))} />
            </TouchableOpacity>
        )
    }

    /**
     * @function: renderModalButtons() - Function returns JSX to show the back and next process buttons in a modal window.
     * @param {}: N/A
     * @returns: JSX: Buttons inside a view container with styles
     */

    const renderModalButtons = () => {
        return (
            <View style = {styles.modalButtonContainer}>
                <Button style = {styles.modalBackButton} onPress = {() => setModalOpen(false)} buttonStyle = {{width: Platform.OS === 'android' ? 125 : null ,marginTop: Platform.OS === 'android' ? 120 : null, marginLeft: Platform.OS === 'android' ? 15 : null, borderRadius: 200, marginBottom: Platform.OS === 'android' ? 50 : null , marginRight: Platform.OS === 'android' ? 30 : null}} title = "Back" />
                <Button style = {styles.modalNextProcessBtn} onPress = {() => setModalOpen(false)} buttonStyle = {{width: Platform.OS === 'android' ? 130 : null ,marginTop: 120, borderRadius: 200}} title = "Next Process" />
            </View>
        )
    }

    const handleCloseHandler = () => {
        const modalState = modalOpen;
        setModalOpen(!modalState); // Close the modal
        navigation.navigate('EstablishFundingScreen');
    }

        /**
     * @function: renderModal() - Function that shows the modal when the user clicks on View more
     * @param {}: N/A
     * @returns: JSX: Returns a <Modal></Modal> component from the react-native library
     */

    const renderModal = () => { // Renders the modal to the screen   

    return (

     <Modal visible = {modalOpen} animationType = {"slide"} transparent = {false}>

        <ScrollView>
            <Text style = {styles.timingTitleStyle}>{EstablishStreetSoccerData.map(title => title.timing_title)}</Text>
            {renderTimingImage()}

            <Card style = {styles.modalCardStyle}>
                <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.timingModalTxt}>{item.timing_text}</Text>} />
            </Card>

            {renderModalButtons()}

            <Text style = {styles.kitTitle}>{EstablishStreetSoccerData.map(title => title.kit_title)}</Text>
                <Image style = {styles.imageKit} source = {(require('../../assets/Images/ImageKit.jpeg'))} />

                <Card style = {styles.cardStyleModal}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.itemKitStyle}>{item.kit_description}</Text>} />
                </Card>

            <View style = {styles.modalButtonContainer}>
                <Button style = {styles.modalBackButton} onPress = {() => setModalOpen(false)} buttonStyle = {{marginTop: 130, marginLeft: 30, borderRadius: 200}} title = "Back" />

                <TouchableOpacity onPress = {handleCloseHandler}>
                    <Button style = {styles.modalNextProcessBtn} buttonStyle = {{marginTop: 130, borderRadius: 200, marginBottom: 100, marginLeft: 30}} title = "Next Process" />
                </TouchableOpacity>

            </View>

         </ScrollView>

        </Modal>
    
        )
    }

    return (
        <TouchableNativeFeedback>
            <ScrollView>
                <Text style = {styles.coachesTitle}>{EstablishStreetSoccerData.map(title => title.coaches_title)}</Text>

                {renderCoachesImg()}
                {renderCoachesList()}

                {renderModal()}

                <Text style = {styles.recruitmentTitle}>{EstablishStreetSoccerData.map(title => title.recruitment_title)}</Text>

                {renderRecruitmentImg()}

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.recruitmentTextStyle}>{item.recruitment_text}</Text>} />
                </Card>
            
                <View style = {styles.buttonContainer}>
                    <Button style = {styles.btnBack} buttonStyle = {{marginRight: Platform.OS === 'android' ? 30 : 10,width: BUTTON_CONFIG.width, borderRadius: BUTTON_CONFIG.borderRadius, marginLeft: Platform.OS === 'android' ? BUTTON_CONFIG.marginLeft : null, marginTop: BUTTON_CONFIG.marginTop}} onPress = {() => setModalOpen(false)} title = "Back"/>
                    <Button style = {styles.processNextButton} buttonStyle = {{marginTop: Platform.OS === 'android' ? -100 : null, padding: Platform.OS === 'android' ? 10 : null, marginBottom: Platform.OS === 'android' ? 100 : 120, padding: 8, width: BUTTON_CONFIG.width, borderRadius: BUTTON_CONFIG.borderRadius, marginRight: Platform.OS === 'android' ? BUTTON_CONFIG.marginLeft : null, marginTop: BUTTON_CONFIG.marginTop}} onPress = {handleModal} title = "Next Processes"/>
                </View>

            </ScrollView>
        </TouchableNativeFeedback>
    )
};

const styles = StyleSheet.create({ // Stores the styles for the data
    coachesTitle: {
        textAlign: 'center',
        fontSize: 31,
        marginTop: 50,
        color: Colors.secondaryColor
    },

    cardStyle: {
        width: 340,
        height: 150,
        marginLeft: 50,
        maxWidth: '100%'
    },

    cardStyleModal: {
        width: 340,
        height: 150,
        marginLeft: 50,
        marginBottom: -55,
        maxWidth: '100%'
    },

    coachesTextStyle: {
        marginTop: Platform.OS === 'android' ? -18.5 : -12,
        fontSize: 15,
        padding: -2
    },

    buttonContainer: {
        flexDirection: 'row',
        maxWidth: '100%',
        marginLeft: 70,
        marginTop: -40
    },

    recruitmentTitle: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 31,
        marginLeft: 5,
        color: Colors.secondaryColor
    },

    backButtonCoaches: {
        marginLeft: -87,
        marginBottom: 50
    },

    timingTitleStyle: {
        textAlign: 'center',
        marginTop: 140,
        fontSize: 29,
        color: Colors.secondaryColor
    },

    modalBackButton: {
        padding: 10,
        marginLeft: 70,
        width: 200,
        marginTop: -130
    },

    modalButtonContainer: {
        marginLeft: 50,
        flexDirection: 'row',
        marginTop: -50
    },

    coachesNextBtnProcess: {
        marginLeft: -100
    },

    modalNextProcessBtn: {
        marginBottom: 90,
        marginTop: -120,
        width: 150,
        marginLeft: 20
    },

    modalCardStyle: {
        width: 350,
        marginLeft: 40,
        marginBottom: -30,
        height: 150
    },

    coachImg: {
        width: 300,
        height: 180,
        marginLeft: 65,
        marginTop: 30
    },

    recruitmentImg: {
        width: 300,
        height: 180,
        marginLeft: 65,
        marginTop: 30
    },

    recruitmentTextStyle: {
        marginTop: Platform.OS === 'android' ? -18.8 : -13,
        fontSize: 15
    },

    timingModalTxt: {
        marginTop: Platform.OS === 'android' ? -19 : -13,
        fontSize: 16
    },

    kitTitle: {
        textAlign: 'center',
        fontSize: 29,
        color: Colors.secondaryColor,
        marginTop: -30
    },

    timingImg: {
        width: 330,
        height: 180,
        marginLeft: 55,
        marginTop: 30
    },

    itemKitStyle: {
        marginTop: Platform.OS === 'android' ? -19 : -13,
        fontSize: 15
    },

    imageKit: {
        width: 330,
        height: 180,
        marginLeft: 55,
        marginTop: 30
    },

});

export default CoachesRecruitmentScreen;