import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Platform, ScrollView, FlatList, Modal} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import EduKickData from '../data/EduKickData';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EduChildrenProfile = ({props, navigation}) => {
    return (
        <ScrollView>
            <Text style = {styles.childrenProfile}>{EduKickData.map(title => title.edu_children_profile)}</Text>

            <Card style = {styles.cardStyle}>
                <FlatList />
            </Card>

            <View style = {styles.btnContainer}>
                <Button buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 130}} title = "Back" />
            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    childrenProfile: {
        textAlign: 'center',
        marginTop: 50,
        color: Colors.primaryColor,
        fontSize: 26
    },

    cardStyle: {
        width: 320,
        height: 180,
        marginLeft: 60
    },

    btnContainer: {
        flexDirection: 'row',
        marginLeft: 145,
        marginTop: 50
    }
})

export default EduChildrenProfile;