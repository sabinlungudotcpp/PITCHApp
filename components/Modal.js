import React, { useState } from 'react';
import {View, Platform, Text, Modal, SafeAreaView, Pressable} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';

const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style = {styles.modalView}>
           <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed.");
          setModalVisible(!modalOpen);
        }}>

            <View style = {styles.modalView}>
                <View style = {styles.modalContainer}>
                    <Text>Hello World Modal</Text>

                    
                </View>
            </View>
        
        </Modal>

        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

      
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