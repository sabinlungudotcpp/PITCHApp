import React from 'react';
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
                <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item }) => <Text style = {styles.profileTxt}>{item.edu_children_profile_text}</Text>} />
            </Card>

            <Card style = {styles.cardStyle}>
                <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.eduChildrenTxtList}>{item.edu_children_profile_list}</Text>} />
            </Card>

            <Text style = {styles.projectTimelineTxt}>{EduKickData.map(title => title.edu_project_timeline)}</Text>

            <Card style = {styles.cardStyle}>
                <FlatList data = {EduKickData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.projectTimelineItemTxt}>{item.edu_project_timeline_item}</Text>} />
            </Card>

            <View style = {styles.btnContainer}>
                <Button onPress = {() => navigation.navigate('EduProgramActivities')} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200, width: 145}} title = "Back" />
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
        marginTop: 20
    },

    profileTxt: {
        marginTop: -13.5,
        fontSize: 15.3
    },

    eduChildrenTxtList: {
        marginTop: -13.5,
        fontSize: 15.5
    },

    projectTimelineTxt: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 28,
        color: Colors.primaryColor
    },

    projectTimelineItemTxt: {
        marginTop: -10
    }
})

export default EduChildrenProfile;