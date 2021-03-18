import React, {useState} from "react";
import {View, StyleSheet, ScrollView, FlatList, Image, SafeAreaView, Platform, Modal, TouchableNativeFeedback, Keyboard, Text} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import EstablishStreetSoccerData from "../data/EstablishStreetSoccerData";

const CoachesRecruitmentScreen = (navigation, props) => {
    const [modalOpen, setModalOpen] = useState(false);

    function renderModal() {
        return (
            <Modal>

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

                <Text style = {styles.recruitmentTitle}>{EstablishStreetSoccerData.map(title => title.recruitment_title)}</Text>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} />
                </Card>

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

    recruitmentTitle: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 31,
        marginLeft: 5,
        color: Colors.secondaryColor
    },
});

export default CoachesRecruitmentScreen;