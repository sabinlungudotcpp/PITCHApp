import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Platform, ScrollView, FlatList, Modal} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import EduKickData from '../data/EduKickData';
import Card from '../components/Card';

const EduKickPropositionScreen = ({props, navigation}) => {
    const [modalOpen, setModalOpen] = useState(false); // Modal State

    const handleToggleModalHandler = () => { // Toggles the modal form open
        const modalState = modalOpen;
        setModalOpen(!modalState);
    };

    const renderModal = () => { // Renders the modal to the screen
        return (

            <Modal visible = {modalOpen} transparent = {false} animationType = {"slide"}>
                <Text style = {styles.modalPropositionsTxt}>{EduKickData.map(title => title.propositions)}</Text>

                <Card style = {styles.cardStyle}>

                </Card>

                <View style = {styles.btnContainer}>
                    <Button onPress = {() => {}} title = "Back" />
                    <Button onPress = {() => {}} title = "View More" />
                </View>
            </Modal>
        )
    }

    const renderButtons = () => {
        return (
            <View style = {styles.btnContainer}>
                <Button buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 130, marginRight: 30}} onPress = {() => navigation.navigate('EduKickMoreScreen')} title = "Back" />
                <Button buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 150}} onPress = {handleToggleModalHandler} title = "View More" />
            </View>
        )
    }

    return (

        <ScrollView>
            <Text style = {styles.propositionTitle}>{EduKickData.map(title => title.edu_title_proposition)}</Text>

            <Image style = {styles.propositionImg} source = {(require('../assets/Images/ImageProposition.jpg'))} />

            <Card style = {styles.cardStyle}>
                <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.propositionDescriptionTxt}>{item.edu_proposition_description}</Text>} />
            </Card>

            <Card style = {styles.cardStyle}>
                <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.propositionDescriptionTxt}>{item.edu_proposition_description_more}</Text>} />
            </Card>

            {renderModal()}
            {renderButtons()}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    propositionTitle: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 30,
        color: Colors.primaryColor
    },

    propositionDescriptionTxt: {
        marginTop: -13,
        fontSize: 15
    },

    propositionImg: {
        width: 310,
        height: 180,
        marginLeft: 64,
        marginTop: 25
    },

    cardStyle: {
        width: 320,
        height: 170,
        marginLeft: 60
    },

    btnContainer: {
        flexDirection: 'row',
        marginLeft: 70,
        marginVertical: 15
    },

    modalPropositionsTxt: {
       textAlign: 'center',
       marginTop: 100,
       color: Colors.primaryColor,
       fontSize: 28
    }
})

export default EduKickPropositionScreen; // Export the screen