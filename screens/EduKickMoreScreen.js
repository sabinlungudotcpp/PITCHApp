import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Platform, ScrollView, FlatList, Modal} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import EduKickData from '../data/EduKickData';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                <Button onPress = {() => {}} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 150, marginLeft: 137}} title = "Back" />
                <Button onPress = {() => {}} title = "Next" />
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
    }
})

export default EduKickMoreScreen