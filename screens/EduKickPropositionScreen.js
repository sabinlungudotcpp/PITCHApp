import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Platform, ScrollView, FlatList, Modal} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import EduKickData from '../data/EduKickData';
import Card from '../components/Card';

const EduKickPropositionScreen = ({props, navigation}) => {
    return (

        <ScrollView>
            <Text style = {styles.propositionTitle}>{EduKickData.map(title => title.edu_title_proposition)}</Text>

            <Image style = {styles.propositionImg} source = {(require('../assets/Images/ImageProposition.jpg'))} />

            <Card style = {styles.cardStyle}>
                <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text></Text>} />
            </Card>

            <View style = {styles.btnContainer}>
                <Button title = "Back" />
                <Button title = "View More" />
            </View>


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
        
    }
})

export default EduKickPropositionScreen;