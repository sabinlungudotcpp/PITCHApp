import React, { useState } from 'react';
import {View, StyleSheet, FlatList, Image, Text, Platform, Modal, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import ChildProtectionData from '../data/ChildProtectionData';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BUTTON_SIZES = {
    borderRadius: 200
}

const ProvidingInformationScreen = ({props, navigation, item}) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <SafeAreaView style = {styles.defaultView}>
            <ScrollView>
                <Text style = {styles.providingInfoHeader}>{ChildProtectionData.map(value => value.title_providing_information)}</Text>

            <Image />

                <Card style = {styles.cardStyle}>
                    <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text>{item.providing_info_text}</Text>} />
                </Card>

                <View style = {styles.btnContainer}>
                    <Button style = {styles.backBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: BUTTON_SIZES.borderRadius}} onPress = {() => navigation.navigate('ReportingConcernsScreen')} title = "Back" />

                    <TouchableOpacity onPress = {() => setModalOpen(true)} >
                         <Button style = {styles.viewInfoBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: BUTTON_SIZES.borderRadius}} title = "View Information" />
                    </TouchableOpacity>
                </View>

                <Modal backgroundColor = {Colors.primaryColor} style = {styles.modalStyle} animationType = {"slide"} visible = {modalOpen} transparent = {false}>
                    <Text style = {styles.infoServiceTxt}>Information Services</Text>

                    <Card style = {styles.cardStyle}>
                        <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} />
                    </Card>

                    <Card style = {styles.cardStyle}>
                        <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} />
                    </Card>

                    <View style = {styles.btnContainer}>
                            <Button onPress = {() => setModalOpen(false)} style = {styles.modalBackBtn} buttonStyle = {{borderRadius: 200, backgroundColor: Colors.primaryColor, width: 150, marginBottom: 5, marginLeft: 85}} title = "Back" />
                    </View>

                </Modal>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    defaultView: {
        flex: 1
    },

    providingInfoHeader: {
        textAlign: 'center',
        color: Colors.primaryColor,
        fontSize: 29,
        marginTop: 60
    },

    cardStyle: { // Styles for the card
        padding: 10, 
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 1,
        width: 340,
        height: 160,
        marginLeft: 48, // Has a margin left of 48 pixels
        marginTop: 35,
        alignItems: 'center', // Align the items to the center of the screen
        maxWidth: '100%'
    },

    btnContainer: {
        width: 110, // Width of the container is 120
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 47,
        marginTop: 35,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        marginBottom: 50
    },

    backBtn: {
        width: 130,
        marginLeft: 10
    },

    viewInfoBtn: {
        width: 180,
        marginLeft: 30
    },

    modalBtn: {
        marginTop: 300
    },

    infoServiceTxt: {
        marginTop: 100,
        textAlign: 'center',
        color: Colors.primaryColor,
        fontSize: 29
    }
});

export default ProvidingInformationScreen;