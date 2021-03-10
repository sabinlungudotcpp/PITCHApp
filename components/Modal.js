import React, { useState } from 'react';
import {View, Platform, Text, Modal, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';

const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style = {styles.modalView}>
           <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed.");
          setModalVisible(!modalOpen);
        }}>
        
        </Modal>
    </View>
    )
};

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});

export default Modal;