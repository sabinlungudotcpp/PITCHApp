import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Platform, ScrollView, FlatList, Modal} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import EduKickData from '../data/EduKickData';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EduProgramActivities = ({props, navigation}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalToggle = () => {
        const modalState = modalOpen;
        setModalOpen(!modalState);
    };

    const handleNextScreenChange = () => {
        const modalState = !modalOpen;
        setModalOpen(modalState);
        return navigation.navigate('EduChildrenProfile');
    }

    const renderModal = () => {
        return (
            <Modal visible = {modalOpen} transparent = {false} animationType = {"slide"}>
                <Text style = {styles.eduFindings}>{EduKickData.map(title => title.edu_findings_stats)}</Text>
                <Image style = {styles.stats1} source = {(require("../assets/Images/ImageStatistics1.png"))} />

                <Text style = {styles.eduFindsText}>{EduKickData.map(text => text.edu_findings_text)}</Text>

                <Image style = {styles.stats2} source = {(require('../assets/Images/ImageStatistics2.png'))} />

                <View style = {styles.btnContainerModal}>
                    <Button onPress = {handleModalToggle} title = "Back" buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 130, marginRight: 30}} />
                    <Button onPress = {handleNextScreenChange} title = "View More" buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 135}} />
                </View>

            </Modal>
        )
    }

    return (
        <ScrollView>
            <Text style = {styles.activitiesTitle}>{EduKickData.map(title => title.edu_activities_title)}</Text>

            <TouchableOpacity>
                <Image style = {styles.imageActivities} source = {(require('../assets/Images/ImageActivitiesEduKick.jpg'))} />
            </TouchableOpacity>

            <Card style = {styles.cardStyle}>
                <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.activitiesDescriptionTxt}>{item.edu_activities_description} {item.edu_activities_next}</Text>} />
            </Card>

            <View style = {styles.btnContainer}>
                <Button onPress = {() => navigation.navigate('EduKickPropositionScreen')} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 135, marginRight: 40}} title = "Back" />
                <Button onPress = {handleModalToggle} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 137}} title = "View More" />
            </View>

        {renderModal()}

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    activitiesTitle: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: 40,
        color: Colors.primaryColor
    },

    imageActivities: {
        width: 320,
        height: 180,
        marginLeft: 60,
        marginTop: 30
    },

    cardStyle: {
        width: 340,
        height: 200,
        marginLeft: 50,
        marginTop: 40
    },

    activitiesDescriptionTxt: {
        marginTop: -18,
        fontSize: 15.5
    },

    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 60,
        marginTop: 20
    },

    eduFindings: {
        textAlign: 'center',
        marginTop: 72,
        marginRight: 15,
        color: Colors.primaryColor,
        fontSize: 29
    },

    stats1: {
        width: 350,
        height: 180,
        marginLeft: 50,
        marginTop: 30
    },

    eduFindsText: {
        padding: 25,
        marginTop: 10,
        fontSize: 16
    },

    stats2: {
        width: 350,
        height: 200,
        marginLeft: 35
    },

    btnContainerModal: {
        flexDirection: 'row',
        marginLeft: 65,
        marginTop: 30
    }
});

export default EduProgramActivities;