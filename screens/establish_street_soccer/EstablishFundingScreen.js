import React, {useState} from "react";
import {View, StyleSheet, Text, Platform, Modal, FlatList, ScrollView, Image} from "react-native";
import {Button} from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "../../components/Card";
import Colors from "../../constants/Colors";
import EstablishStreetSoccerData from "../../data/EstablishStreetSoccerData";

const EstablishFundingScreen = ({navigation, props}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const modalState = modalOpen;

    const toggleModalHandler = () => { // Toggles the modal on
        setModalOpen(!modalState);
    };

    const closeModalHandler = () => {
        setModalOpen(modalState);
    }

    const renderFundingBody = () => { // Renders the funding body of the screen
        return (
            <TouchableOpacity>
                <Image style = {styles.fundingImg} source = {(require('../../assets/Images/ImgFunding.jpg'))} />

                <Card>

                </Card>
            </TouchableOpacity>
        )
    }

    return (
     
        <ScrollView style = {styles.defaultView}>
            <Text style = {styles.fundingText}>{EstablishStreetSoccerData.map(title => title.funding_title)}</Text>
            {renderFundingBody()}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    defaultView: {
        flex: 1
    },

    fundingText: {
        textAlign: 'center',
        fontSize: 29,
        color: Colors.secondaryColor,
        marginTop: 50
    },

    fundingImg: {
        width: 250,
        height: 150,
        marginLeft: 88,
        marginTop: 20
    }
});

export default EstablishFundingScreen;