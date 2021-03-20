import React, {useState} from "react";
import {View, StyleSheet, Text, Platform, Modal, FlatList, ScrollView, Image} from "react-native";
import {Button} from "react-native-elements";
import Card from "../../components/Card";
import Colors from "../../constants/Colors";
import EstablishStreetSoccerData from "../../data/EstablishStreetSoccerData";

const EstablishFundingScreen = ({navigation, props}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModalHandler = () => { // Toggles the modal on
        setModalOpen(!modalOpen);
    };

    const closeModal = () => {
        setModalOpen(modalOpen);
    }

    const renderFundingButtons = () => {
        return (
            <View style = {styles.btnContainer}>
            <Button buttonStyle = {{marginLeft: 160, borderRadius: 200, marginRight: 30, width: 130}} onPress = {closeModal} title = "Back"/>
            <Button buttonStyle = {{borderRadius: 200, width: 140}} onPress = {toggleModalHandler} title = "View More"/>
        </View>
        )
    }

    const showModal = () => {
        return (
            <Modal visible = {modalOpen} transparent = {false} animationType = {"slide"}>
                <Text></Text>
            </Modal>
        )
    }

    const renderFundingBody = () => { // Renders the funding body of the screen
        return (
            <Card style = {styles.cardStyle}>
                 <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.fundingStyleTxt}>{item.funding_text}</Text>} />
             </Card>
        )
    }

    return (
     
        <ScrollView style = {styles.defaultView}>
            <Text style = {styles.fundingText}>{EstablishStreetSoccerData.map(title => title.funding_title)}</Text>
            <Image style = {styles.fundingImg} source = {(require('../../assets/Images/ImgFunding.jpg'))} />

           {showModal()}
        
            {renderFundingBody()}
            {renderFundingButtons()}

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
    },

    cardStyle: { // Styles for the card container
        width: 340,
        height: 150,
        marginLeft: 50,
        maxWidth: '100%'
    },

    fundingStyleTxt: {
        marginTop: -13,
        fontSize: 15.5
    },

    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 40,
        marginLeft: -90
    },
});

export default EstablishFundingScreen;