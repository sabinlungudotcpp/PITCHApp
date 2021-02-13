import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import introductionData from '../data/IntroductionData';
import Colors from '../constants/Colors';
import Card from '../components/Card';

const AboutUsScreen = ({item, navigation}) => {
    return (

    <ScrollView>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.aboutTitle}>{item.about_title}</Text>} keyExtractor = {(item) => item.id}/>
        <Image style = {{width: 330, height: 170, marginLeft: 40, marginTop: -30}} source = {require('../assets/Images/SlumSoccer.jpg')}/>

    <Card style = {style.cardStyle}>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.about_description}>{item.about_description}</Text>} keyExtractor = {(item) => item.id}/>
    </Card>

    <Card style = {style.secondCard}>
    <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.about_sub}>{item.about_sub_description}</Text>} keyExtractor = {(item) => item.id}/>

    </Card>

    <View style = {style.subContainer}>
    <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.aboutMission}>{item.about_mission}</Text>} keyExtractor = {(item) => item.id}/>
    <Image style = {{width: 340, height: 200, marginLeft: 37, opacity: 0.8, backgroundColor: 'black', marginBottom: 10, marginTop: 25}} source = {require('../assets/Images/missionimg.jpg')}/>

        </View>
       
        <Card style = {style.cardContainer}>
            <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.missionTxtStyle}>{item.about_mission_description}</Text>} />
        </Card>
    </ScrollView>

    )
};

const style = StyleSheet.create({

    aboutTitle: {
        marginTop: 60,
        marginLeft: 3,
        marginBottom: -53,
        textAlign: 'center',
        fontSize: 32,
        color: Colors.primaryColor,
        right: 2
    },

    about_description: { // The description of the About Us
        padding: 15,
        marginVertical: 33,
        fontSize: 18,
        marginLeft: 20,
        marginBottom: -20,
        marginTop: 15
    },

    about_sub: {
        flex: 1,
        alignItems: 'center',
        fontSize: 18,
        padding: 15,
        marginLeft: 20,
        marginBottom: -39,
    },

    aboutMission: {
        marginLeft: 125,
        fontSize: 30,
        marginBottom: -10,
        color: Colors.primaryColor
    },

    subTitle: {
        fontSize: 24,
        marginBottom: 30,
        marginTop: -140,
        marginLeft: 120,
        fontSize: 32,
        color: Colors.primaryColor
    },

    missionTxt: {
        marginLeft: 120,
        marginTop: -200,
        fontSize: 32,
        color: Colors.primaryColor
    },

    subContainer: {
        marginTop: 50
    },

    missionTxtStyle: {
        padding: 15,
        textAlign: 'center',
        fontSize: 17,
        marginTop: 5
    },

    cardStyle: {
        padding: 3,
        paddingLeft: -50,
        marginBottom: 30,
        width: 380,
        height: 155,
        marginLeft: 15,
        alignItems: 'center',
        maxWidth: '100%'
    },

    cardContainer: {
        width: 385,
        paddingHorizontal: -5,
        left: -30,
        height: 140,
        maxWidth: '100%',
        alignItems: 'center',
        marginLeft: 45,
        padding: -5,
        top: -10,
        paddingRight: 5
    },

    secondCard: {
        width: 380,
        padding: 5,
        paddingRight: 10,
        height: 135,
        alignItems: 'center',
        textAlign: 'left',
        marginBottom: -40,
        top: -30,
    }
});

export default AboutUsScreen;