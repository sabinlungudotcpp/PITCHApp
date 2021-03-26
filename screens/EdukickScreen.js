import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Platform, ScrollView, FlatList, Modal} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import EduKickData from '../data/EduKickData';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BUTTON_CONTAINER_SIZES = {
    width: 110,
    height: 42,
    borderRadius: 200
}

const EdukickScreen = ({props, navigation}) => { // Edu Kick screen
    const [modal, setModalOpen] = useState(false);

    const toggleModalHandler = () => { // Toggles the modal on
        const modalState = modal;
        setModalOpen(!modalState);

        if(modalState) {
            return renderModal();
        }
    };

    const toggleNextHandler = () => {
        const modalState = modal;
        setModalOpen(!modalState);
        navigation.navigate('EduKickMoreScreen');
    }

    const renderModal = () => { // Renders the modal to the screen
        return (
            
            <Modal visible = {modal} animationType = {"slide"} transparent = {false}>
                <ScrollView>
                <Text style = {styles.eduTitleWhatTxt}>{EduKickData.map(title => title.edu_title_what)}</Text>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.modalEduWhatTxt}>{item.edu_what_description}</Text>} />
                </Card>

                <View style = {styles.btnContainer}>
                    <Button style = {styles.backBtnModal} onPress = {toggleModalHandler} buttonStyle = {{borderRadius: 200, width: 140, marginRight: 30, backgroundColor: Colors.primaryColor}} title = "Back" />
                    <Button style = {styles.viewMoreModalBtn} buttonStyle = {{borderRadius: 200, width: 140, backgroundColor: Colors.primaryColor}} title = "View More"/>
                </View>

                <Text style = {{textAlign: 'center', marginBottom: 470, fontSize: 29, marginTop: -10, marginBottom: 10, color: Colors.primaryColor}}>Edu Kick Problems</Text>

                <Card style = {styles.cardStyle}>
                    <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item}) => item.id >= 0 && item.id <= 7 ? <Text>{item.edu_list_item} {item.edu_more_text}</Text> : null} />
                </Card>

                <Button onPress = {toggleNextHandler} buttonStyle = {{borderRadius: 200, backgroundColor: Colors.primaryColor, width: 150, marginLeft: 130, marginTop: 35}} title = "Next" />

               </ScrollView>
            </Modal>
        
        )
    }

    const renderButtons = () => {

        return (

            <View style = {styles.btnContainer}>
                <Button style = {styles.backBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} onPress = {() => setModalOpen(false)} title = "Back" />
                <Button style = {styles.viewMoreBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} onPress = {toggleModalHandler} title = "View More" />
            </View>
        )
    }

    return (
        <ScrollView>
            <Text style = {styles.title}>{EduKickData.map(title => title.edu_title)}</Text>

            <TouchableOpacity>
                <Image style = {styles.eduKickBackgroundImg} source = {(require('../assets/Images/EduKickBackgroundImg.jpg'))} />
            </TouchableOpacity>

            <Card style = {styles.cardStyle}>
                <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.eduDescriptionStyle}>{item.edu_description}</Text>} />
            </Card>

            {renderModal()}
            {renderButtons()}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    title: {
        marginLeft: 55,
        marginTop: 50,
        fontSize: 28,
        color: Colors.primaryColor
    },

    eduKickBackgroundImg: {
        width: 330,
        height: 180,
        marginLeft: 53,
        marginTop: 30
    },

    cardStyle: {
        width: 330,
        height: 170,
        marginLeft: 50
    },

    eduDescriptionStyle: {
        fontSize: 15,
        marginTop: -3.5,
        padding: -1
    },

    btnContainer: {
        width: BUTTON_CONTAINER_SIZES.width,
        height: BUTTON_CONTAINER_SIZES.height,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 50,
        marginTop: 25,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        marginBottom: 50
    },

    backBtn: {
        width: 135,
        marginLeft: 10,
        marginRight: 30
    },

    viewMoreBtn: {
        width: 150
    },

    eduTitleWhatTxt: {
        textAlign: 'center',
        marginTop: 80,
        fontSize: 28,
        color: Colors.primaryColor
    },

    modalEduWhatTxt: {
        marginTop: -12,
        fontSize: 15
    },

    backBtnModal: {
        width: 135,
        marginLeft: 10,
        marginRight: 30
    },

    viewMoreModalBtn: {

    }

})

export default EdukickScreen;