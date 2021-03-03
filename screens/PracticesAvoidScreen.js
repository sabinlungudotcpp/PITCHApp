import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card'; // Imports the Card component
import Colors from '../constants/Colors';
import PracticesAvoidData from '../data/PracticesAvoidData';

const PracticesAvoidScreen = ({props, navigation}) => { // The Practices to Avoid Screen
    try {
        return (

       <ScrollView minimumZoomScale = {1} maximumZoomScale = {5}>
        <Text style = {style.mainHeading}>Practices to Avoid</Text>
    
        <Card style = {style.cardStyle}>
            <FlatList data = {PracticesAvoidData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.descriptionStyleTxt}>{item.description}</Text>} />
        </Card>

        <Card style = {style.cardStyle}>
            <FlatList data = {PracticesAvoidData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.descriptionStyleTxt}>{item.avoid_list}</Text>} />
            <FlatList data = {PracticesAvoidData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.descriptionStyleTxt}>{item.avoid_second}</Text>} />
        </Card>
    
         <Text style = {style.sanctionTxt}>Practices to Sanction</Text>
    
        <Card style = {style.cardStyle}>
            <FlatList data = {PracticesAvoidData} keyExtractor = {(item) => item.id} renderItem = {({item}) => item.id >= 2 && item.id <= 6 ? <Text>{item.sanction_data}</Text> : null} />
         </Card>
    
        <Card style = {style.cardStyle}>
             <FlatList data = {PracticesAvoidData} keyExtractor = {(item) => item.id} renderItem = {({item}) => item.id >= 6 && item.id <= 10 ? <Text>{item.sanction_data}</Text> : null} />
        </Card>
    
        <View style = {style.btnContainer}>
            <Button onPress = {() => navigation.navigate('GoodPracticeScreen')} style = {style.backBtn} buttonStyle = {{backgroundColor: '#F7B500', borderRadius: 200}} title = "Back"/>
        </View> 
    </ScrollView>

        )
    } 
    
    catch(error) {
        if(error) {
            return console.error(`Cause of error ${error.toString()} - recorded at ${Date.now()}`);
        }
    }
};

const style = StyleSheet.create({
    mainView: {
        flex: 1
    },

    mainHeading: {
        textAlign: 'center',
        marginTop: 55,
        fontSize: 31,
        color: Colors.primaryColor
    },

    cardStyle: { // The style for the card
        padding: 8, // Padding of 8 pixels
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 30,
        width: 350,
        height: 110,
        marginLeft: 35,
        marginTop: 28,
        alignItems: 'center',
        maxWidth: '100%'
    },

    descriptionStyleTxt: {
        fontSize: 14.5
    },

    sanctionTxt: {
        textAlign: 'center',
        fontSize: 31,
        color: Colors.primaryColor
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

    backBtn: {
        width: 150,
        marginLeft: 80
    }
});

export default PracticesAvoidScreen; // Export the screen