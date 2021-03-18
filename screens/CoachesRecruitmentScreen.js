import React, {useState} from "react";
import {View, StyleSheet, ScrollView, FlatList, Image, SafeAreaView, Platform, Modal, TouchableNativeFeedback, Keyboard, Text} from "react-native";
import {Button} from "react-native-elements";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import EstablishStreetSoccerData from "../data/EstablishStreetSoccerData";
import CustomModal from "../components/CustomModal";

const CoachesRecruitmentScreen = (navigation, props) => {
    const [modalOpen, setModalOpen] = useState(false);

    function handleModal() {
        if(!modalOpen) {
            setModalOpen(true);
        }
    }

    const renderModal = () => { // Renders the modal to the screen   
        return (
        <Modal visible = {modalOpen} animationType = {"slide"} transparent = {false}>
            <Text style = {styles.timingTitleStyle}>{EstablishStreetSoccerData.map(title => title.timing_title)}</Text>
            <Button style = {styles.modalBackButton} onPress = {() => setModalOpen(false)} buttonStyle = {{marginTop: 300, borderRadius: 200}} title = "Back" />
        </Modal>
        )
    }

    return (
        <TouchableNativeFeedback>
            <ScrollView>
                <Text style = {styles.coachesTitle}>{EstablishStreetSoccerData.map(title => title.coaches_title)}</Text>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} />
                </Card>

                {renderModal()}

                <Text style = {styles.recruitmentTitle}>{EstablishStreetSoccerData.map(title => title.recruitment_title)}</Text>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} />
                </Card>
            
                <View style = {styles.containerCoachesButtons}>
                    <Button style = {styles.backButtonCoaches} buttonStyle = {{backgroundColor: Colors.secondaryColor, borderRadius: 200, width: 150, marginLeft: 140, marginTop: 50}} title = "Back"/>
                    <Button style = {styles.coachesNextBtnProcess} buttonStyle = {{backgroundColor: Colors.secondaryColor, borderRadius: 200, width: 150, marginLeft: 140, marginTop: 50}} onPress = {handleModal} title = "View More"/>
                </View>

            </ScrollView>
        </TouchableNativeFeedback>
    )
};

const styles = StyleSheet.create({
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

    containerCoachesButtons: {
        flexDirection: 'row'
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
        marginLeft: 100,
        width: 200,
        marginBottom: 20
    },

    coachesNextBtnProcess: {
        marginLeft: -100
    }
});

export default CoachesRecruitmentScreen;