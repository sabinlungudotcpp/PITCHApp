import React from 'react';
import {Text, Image, StyleSheet, FlatList, View} from 'react-native';
import {Button} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Card'; // Card import from the components
import ChildProtectionData from '../data/ChildProtectionData';
import AvoidData from '../data/AvoidData'; // Imports the Avoid data
import Colors from '../constants/Colors'; // Imports the Colors from the file

const BUTTON_CONTAINER_SIZES = {
    width: 110,
    height: 42
}

const GoodPracticeScreen = ({props, navigation, item}) => { // The Good Practices Screen

    try {
        return (
            
        <ScrollView>
            <Text style = {styles.goodPracticeTxt}>{ChildProtectionData.map(data => data.title_practice)}</Text>
        <Image style = {styles.imageContainer} source = {require('../assets/Images/ImageGoodPractice.jpg')}/>
    
        <Card style = {styles.cardStyle}>
            <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.practiceTxt}>{item.description_practice}</Text>}/>
        </Card>
    
        <View style = {styles.btnContainer}>
            <Button style = {styles.firstGuidelineBtn} buttonStyle =  {{backgroundColor: '#F7B500', theme: 'dark', borderRadius: 200}} title = "Guidelines" onPress = {() => navigation.navigate('GoodPracticeGuidelines')} /> 
            <Button style = {styles.nextPolicyBtn} buttonStyle =  {{backgroundColor: '#F7B500', theme: 'dark', borderRadius: 200}} title = "View More" /> 
        </View>
    
        <Text style = {styles.avoidTxt}>{ChildProtectionData.map(data => data.title_avoid)}</Text>
        <Image style = {styles.avoidImg} source = {require('../assets/Images/ImagePracticesToAvoid.jpg')}/>
    
        <Card style = {styles.cardStyle}>
            <FlatList data = {AvoidData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.descriptionAvoidTxt}>{item.description_avoid}</Text>} />
        </Card>
    
        <View style = {styles.btnContainer}>
            <Button onPress = {() => navigation.navigate('PracticesAvoidScreen')} style = {styles.guidelinesBtn} buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} title = "Guidelines"/>
            <Button onPress = {() => navigation.navigate('PhotographyFilmingScreen')} style = {styles.nextPolicyBtn} buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} title = "Next Policy" />
         </View>
    </ScrollView>

        )
    } 
    
    catch(error) {

        if(error) {
            return console.error(`An error occurred ${error.toString()}`);
        }
    }
}

const styles = StyleSheet.create({
    goodPracticeTxt: { // Stylings for the good practice text header
        textAlign: 'center', // Aligned in the center
        marginTop: 60,
        marginBottom: 10,
        fontSize: 30,
        color: Colors.primaryColor
    },

    avoidTxt: {
        textAlign: 'center',
        fontSize: 30,
        color: Colors.primaryColor
    },

    practiceTxt: {
        fontSize: 15.5
    },

    imageContainer: { // Stylings for the image container
        width: 320, // Has a width of 320
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
        width: 350,
        height: 130,
        marginLeft: 35,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    btnContainer: {
        width: BUTTON_CONTAINER_SIZES.width,
        height: BUTTON_CONTAINER_SIZES.height,
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

    firstGuidelineBtn: { // Stylings for the first guideline button
      width: 145, // Width of 145 pixels
      right: -5,
      left: -10,
      marginLeft: 10,
      marginRight: 15,
      color: 'black',
      textAlign: 'center'
    },

    guidelinesBtn: {
        width: 145,
        marginRight: 20,
        paddingLeft: 5,
        marginLeft: -5
    },  

    nextPolicyBtn: {
        width: 155,
        marginLeft: 1
    },

    descriptionAvoidTxt: { // Styles for the avoid descriptions text
        marginTop: 10,
        fontSize: 15
    }
});

export default GoodPracticeScreen; // Export the screen