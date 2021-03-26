import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Platform, ScrollView, FlatList, Modal} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import EduKickData from '../data/EduKickData';
import Card from '../components/Card';

const BUTTON_CONTAINER_SIZES = {
    width: 110,
    height: 42,
    borderRadius: 200
}

const EduKickMoreScreen = ({props, navigation}) => {
    return (

        <ScrollView>
            <Text style = {styles.eduKickTitleMore}>{EduKickData.map(title => title.edu_title_more)}</Text>

            <Card style = {styles.cardStyle}>
                <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.moreDetailsTxt}>{item.edu_more_description}</Text>} />
            </Card>

            <Card style = {styles.cardStyle}>
                <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.moreDetailsTxt}>{item.edu_more_description}</Text>} />
            </Card>

            <View style = {styles.btnContainer}>
                <Button onPress = {() => navigation.navigate('EdukickScreen')} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 150, marginLeft: 210}} title = "Back" />
                <Button onPress = {() => {}} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 150, marginLeft: 30}} title = "Next" />
            </View>


        </ScrollView>
    )
};

const styles = StyleSheet.create({
    eduKickTitleMore: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 28,
        color: Colors.primaryColor
    },

    cardStyle: {
        width: 330,
        height: 170,
        marginLeft: 50
    },

    moreDetailsTxt: {
        marginTop: -12.5,
        fontSize: 15.6
    },

    btnContainer: {
        width: BUTTON_CONTAINER_SIZES.width,
        height: BUTTON_CONTAINER_SIZES.height,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: -150,
        marginTop: 25,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 30,
        marginBottom: 50
    }
})

export default EduKickMoreScreen