import React, {useState} from "react";
import {View, StyleSheet, ScrollView, FlatList, Image, SafeAreaView, Platform, Modal, TouchableNativeFeedback, Keyboard, Text} from "react-native";
import {Button} from "react-native-elements";
import Card from "../../components/Card";
import Colors from "../../constants/Colors";
import EstablishStreetSoccerData from "../../data/EstablishStreetSoccerData";
import { TouchableOpacity } from "react-native-gesture-handler";

const CoachesRecruitmentScreen = ({navigation, props}) => { // Recruitment Screen Component
    const [modalOpen, setModalOpen] = useState(false);

    // Function that handles the modal screen
    const handleModal = () => {
        if(!modalOpen) {
            setModalOpen(true);
        }
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

    const renderModal = () => { // Renders the modal to the screen   

    return (

     <Modal visible = {modalOpen} animationType = {"slide"} transparent = {false}>

        <ScrollView>
            <Text style = {styles.timingTitleStyle}>{EstablishStreetSoccerData.map(title => title.timing_title)}</Text>
            {renderTimingImage()}

            <Card style = {styles.modalCardStyle}>
                <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.timingModalTxt}>{item.timing_text}</Text>} />
            </Card>

            <View style = {styles.modalButtonContainer}>
                <Button style = {styles.modalBackButton} onPress = {() => setModalOpen(false)} buttonStyle = {{marginTop: 230, marginLeft: 30, borderRadius: 200}} title = "Back" />
                <Button style = {styles.modalNextProcessBtn} onPress = {() => setModalOpen(false)} buttonStyle = {{marginTop: 230, borderRadius: 200}} title = "Next Process" />
            </View>

            <Text style = {styles.kitTitle}>{EstablishStreetSoccerData.map(title => title.kit_title)}</Text>

            <Card style = {styles.cardStyleModal}>
                <FlatList data = {EstablishStreetSoccerData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.itemKitStyle}>{item.kit_description}</Text>} />
            </Card>

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
            
                <View style = {styles.containerCoachesButtons}>
                    <Button onPress = {() => navigation.navigate('SessionsPartnershipsScreen')} style = {styles.backButtonCoaches} buttonStyle = {{backgroundColor: Colors.secondaryColor, borderRadius: 200, width: 150, marginLeft: 140, marginTop: 50}} title = "Back"/>
                    <Button style = {styles.coachesNextBtnProcess} buttonStyle = {{backgroundColor: Colors.secondaryColor, borderRadius: 200, width: 150, marginLeft: 140, marginTop: 50}} onPress = {handleModal} title = "View More"/>
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
        marginBottom: 200,
        maxWidth: '100%'
    },

    coachesTextStyle: {
        marginTop: -12,
        fontSize: 15,
        padding: -2
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
        marginLeft: 70,
        width: 200,
        marginTop: -130
    },

    modalButtonContainer: {
        marginLeft: -60,
        flexDirection: 'row'
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
        marginTop: -13,
        fontSize: 15
    },

    timingModalTxt: {
        marginTop: -13,
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
        marginTop: -13,
        fontSize: 15
    },

});

export default CoachesRecruitmentScreen;