import React from 'react';
import {View, StyleSheet, FlatList, ScrollView, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';
import Colors from '../constants/Colors';

const PhotographyFilmingScreen = ({props, navigation, item}) => {
    return (
        <ScrollView>
            <Text style = {style.photographyTxt}>{ChildProtectionData.map(value => value.title_photography)}</Text>
            <Image style = {style.photographyImg} source = {require('../assets/Images/ImagePhotography.jpg')} />

            <Card style = {style.cardStyle}>
                <FlatList keyExtractor = {(item) => item.id} data = {ChildProtectionData} renderItem = {({item}) => <Text style = {style.photographyDescriptionTxt}>{item.photography_description}</Text>} />
            </Card>

            <View style = {style.btnContainers}>
                <Button onPress = {() => navigation.navigate('GoodPracticeScreen')} style = {style.backBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} title = "Back" />
                <Button onPress = {() => navigation.navigate('RecruitmentScreen')} style = {style.nextPolicyBtn} buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} title = "Next Policy"/>
            </View>

     </ScrollView>
    )
};

const style = StyleSheet.create({
    photographyTxt: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 31,
        color: '#F7B500'
    },

    photographyImg: {
        width: 320,
        height: 200,
        marginLeft: 52,
        marginVertical: 25
    },

    cardStyle: {
        padding: 12,
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 30,
        width: 320,
        height: 170,
        marginLeft: 50,
        marginTop: 20,
        alignItems: 'center',
        maxWidth: '100%'
    },

    btnContainers: {
        width: 140,
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 50,
        marginTop: 15,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
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

    nextPolicyBtn: {
         width: 160,
         right: -5,
         left: -10,
         marginLeft: 35,
         color: 'black',
         textAlign: 'center'
    },

    photographyDescriptionTxt: {
        padding: -6,
        marginBottom: -15,
        fontSize: 15
    }
})

export default PhotographyFilmingScreen;