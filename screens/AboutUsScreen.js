import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import introductionData from '../data/IntroductionData';
import Colors from '../constants/Colors';
import Card from '../components/Card';

const AboutUsScreen = ({item, navigation}) => {
    return (

    <ScrollView>
        <View>

        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.aboutTitle}>{item.about_title}</Text>} keyExtractor = {(item) => item.id}/>
        <Image style = {{width: 330, height: 170, marginLeft: 40, marginTop: -30}} source = {require('../assets/Images/SlumSoccer.jpg')}/>
        </View>

        <View>
        
    <Card style = {style.cardStyle}>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.about_description}>{item.about_description}</Text>} keyExtractor = {(item) => item.id}/>
    </Card>

    </View>

    <Card style = {style.secondCard}>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.about_sub}>{item.about_sub_description}</Text>} keyExtractor = {(item) => item.id}/>
    </Card>

    <View style = {style.subContainer}>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.aboutMission}>{item.about_mission}</Text>} keyExtractor = {(item) => item.id}/>
    <Image style = {{width: 330, height: 200, marginLeft: 45, opacity: 0.9, backgroundColor: 'black', marginBottom: 10, marginTop: 25}} source = {require('../assets/Images/missionimg.jpg')}/>
        </View>
       
       <View>
        <Card style = {style.cardContainer}>
            <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {style.missionTxtStyle}>{item.about_mission_description}</Text>} />
        </Card>
        </View>

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
        color: Colors.whiteColor
    },

    missionTxt: {
        marginLeft: 120,
        marginTop: -200,
        fontSize: 32,
        color: 'white'
    },

    subContainer: {
        marginTop: 45,
    },

    missionTxtStyle: {
        padding: 15,
        textAlign: 'center',
        fontSize: 18,
        marginTop: -5
    },

    cardStyle: {
        padding: -3,
        paddingLeft: -35,
        marginBottom: 40,
        width: 360,
        height: 140,
        marginLeft: 30,
        alignItems: 'center',
        maxWidth: '100%'
    },

    cardContainer: {
        width: 350,
        paddingHorizontal: -5,
        left: -30,
        height: 160,
        maxWidth: '100%',
        alignItems: 'center',
        marginLeft: 60,
        padding: -2,
        paddingTop: -15,
        top: -1,
        paddingRight: 10,
        marginBottom: 10
    },

    secondCard: {
        width: 380,
        padding: 5,
        paddingRight: 10,
        height: 130,
        alignItems: 'center',
        textAlign: 'left',
        marginBottom: -40,
        top: -30,
    }
});

export default AboutUsScreen;