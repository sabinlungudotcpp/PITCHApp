import React from 'react';
import {Text, Image, StyleSheet, FlatList, View} from 'react-native';
import {Button} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';

const GoodPracticeScreen = ({props, navigation}) => {
    return (
        <ScrollView>
            <Text style = {styles.goodPracticeTxt}>{ChildProtectionData.map(data => data.title_practice)}</Text>
            <Image style = {styles.imageContainer} source = {require('../assets/Images/ImageGoodPractice.jpg')}/>

        <Card style = {styles.cardStyle}>
            <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.practiceTxt}>{item.description_practice}</Text>}/>
        </Card>

        <View style = {styles.btnContainers}>
                <Button style = {styles.nextBtn} buttonStyle =  {{backgroundColor: '#F7B500', theme: 'dark', borderRadius: 200}} title = "Next Policy" /> 
                <Button style = {styles.guidelinesBtn} buttonStyle =  {{backgroundColor: '#F7B500', theme: 'dark', borderRadius: 200}} title = "Guidelines" /> 
        </View>

        <Text style = {styles.avoidTxt}>{ChildProtectionData.map(data => data.title_avoid)}</Text>
        <Image style = {styles.avoidImg} source = {require('../assets/Images/ImagePracticesToAvoid.jpg')}/>

        <Card style = {styles.cardStyle}>

        </Card>

        <View style = {styles.btnContainer}>
            <Button style = {styles.guidelinesBtn} buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} title = "Guidelines"/>
            <Button style = {styles.nextPolicyBtn} buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} title = "Next Policy" />
        </View>

       </ScrollView>
    )
}

const styles = StyleSheet.create({
    goodPracticeTxt: {
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 10,
        fontSize: 30,
        color: '#F7B500'
    },

    avoidTxt: {
        textAlign: 'center',
        fontSize: 30,
        color: '#F7B500'
    },

    practiceTxt: {
        fontSize: 15.5
    },

    imageContainer: {
        width: 320,
        height: 180,
        marginLeft: 47,
        marginTop: 20
    },

    avoidImg: {
        width: 320,
        height: 180,
        marginLeft: 47,
        marginTop: 20,
        marginBottom: 10
    },

    cardStyle: {
        padding: 8,
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 30,
        width: 320,
        height: 163,
        marginLeft: 50,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    btnContainer: {
        width: 110,
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 50,
        marginTop: 10,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        marginBottom: 50
    },

    guidelinesBtn: {
        width: 145,
        marginRight: 20,
        paddingLeft: 5,
        marginLeft: -5
    },  

    nextPolicyBtn: {
        width: 150,
        marginLeft: 10
    },

    nextBtn: {
        width: 175,
        marginLeft: 120,
        marginBottom: 30
    }
});

export default GoodPracticeScreen;