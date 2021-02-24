import React from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';

const RecruitmentScreen = ({props, navigation, item}) => { // The Recruitment Screen
    return (
        <ScrollView>
            <Text style = {style.recruitmentTxt}>{ChildProtectionData.map(value => value.title_recruitment)}</Text>
            <Image style = {style.recruitmentImg} source = {require('../assets/Images/ImageRecruitment.jpg')} />

            <Card style = {style.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.recruitmentDescriptionTxt}>{item.recruitment_description}</Text>} />
            </Card>

            <Card style = {style.cardStyle}>
                 <FlatList data = {ChildProtectionData} renderItem = {({item}) => <Text style = {style.listItems}>{item.recruitment_list}</Text>} />
            </Card>

            <View style = {style.buttonContainer}>
                <Button onPress = {() => {}} buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} style = {style.backBtn} title = "Back" />
                <Button onPress = {() => {}} buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} style = {style.guidelinesBtn} title = "View Guidelines" />
            </View>

        </ScrollView>
    )
};

const style = StyleSheet.create({ // The styles for the recruitment screen
    recruitmentTxt: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 31,
        marginLeft: 5,
        color: '#F7B500'
    },

    recruitmentImg: { // The styles for the recruitment image
        width: 330, // Width of the image
        height: 165,
        marginLeft: 48,
        marginTop: 20 // 20 pixels from the top
    },

    cardStyle: { // Styling for the card
        padding: 10, // Has a padding space of 12
        paddingLeft: -40, // Padding left of -40
        paddingBottom: -5,
        marginBottom: 1,
        width: 340,
        height: 140,
        marginLeft: 45,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    recruitmentDescriptionTxt: {
        padding: -10,
        fontSize: 15,
        marginTop: -10
    },

    listItems: {
        marginTop: -8,
        fontSize: 15
    },

    inductionTxt: {
        marginTop: 25,
        textAlign: 'center',
        fontSize: 31,
        color: '#F7B500'
    },

    buttonContainer: {
        width: 110,
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
        width: 180,
        borderRadius: 200,
        color: 'black',
        paddingLeft: 10,
        textAlign: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        color: 'black',
        left: 25,
        paddingLeft: 10,
        paddingHorizontal: 20,
        marginRight: 5,
        marginLeft: -40,
    },

    guidelinesBtn: {
        width: 160,
        right: -5,
        left: -10,
        marginLeft: 35,
        color: 'black',
        textAlign: 'center'
    }


});

export default RecruitmentScreen; // Export the Recruitment Screen