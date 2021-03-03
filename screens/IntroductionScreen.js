import React from 'react';
import {FlatList, View, Text, StyleSheet, ScrollView, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import introductionData from '../data/IntroductionData';

const IntroductionScreen = ({props, navigation, item}) => {

    return (
        <ScrollView>
            
        <Text style = {styles.introductionTxt}>Introduction</Text>

        <Card style = {styles.cardStyle}>
            <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {styles.introText}>{item.main_sub_description_intro}</Text>} keyExtractor = {(item) => item.id} />
        </Card>

        <Card style = {styles.secondCard}>
            <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {styles.introText}>{item.second_sub_description_intro}</Text>} keyExtractor = {(item) => item.id} />
        </Card>

        <Card style = {styles.tempCard}>
            <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {styles.introText}>{item.extra_intro}</Text>} keyExtractor = {(item) => item.id} />
        </Card>

        <Card style = {styles.thirdCard}>
            <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {styles.introText}>{item.third_sub_description_intro}</Text>} keyExtractor = {(item) => item.id} />
        </Card>

        <View style = {styles.btnContainers}>
             <Button buttonStyle = {{backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.primaryColor, theme: 'dark', borderRadius: 200}} style = {styles.backBtn} title = "Back" onPress = {() => navigation.navigate('ChildProtectionScreen')}/>
             <Button buttonStyle = {{backgroundColor: '#F7B500', theme: 'dark', borderRadius: 200}} style = {styles.aimsBtn} title = "View Aims" onPress = {() => navigation.navigate('AimsScreen')}/>
        </View>
     
</ScrollView>

    )
}

const styles = StyleSheet.create({
    introductionTxt: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 33,
        color: '#F7B500'
    },

    introText: {
        fontSize: 16,
        marginTop: -5,
        paddingLeft: 5
    },

    cardStyle: {
        padding: -5,
        paddingLeft: -20,
        marginBottom: 10,
        width: 350,
        height: 80,
        marginLeft: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    secondCard: {
        height: 95,
        width: 350,
        marginLeft: 35,
        padding: 10,
        paddingTop: -10,
        paddingBottom: -1
    },

    tempCard: {
        height: 115,
        width: 350, 
        marginLeft: 35,
        padding: 10,
        paddingTop: -3 
    },

    thirdCard: {
        height: 95,
        width: 350,
        marginLeft: 35,
        marginBottom: 10,
        padding: 10,
        paddingTop: -5
    },

    btnContainers: {
        width: 130, // The width of the button
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 45,
        marginTop: 30,
        marginBottom: 50,
        paddingHorizontal: -15,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 1,
    },

    backBtn: {
        width: 160,
         right: -5,
         left: -15,
         marginLeft: 5,
         color: 'black',
         textAlign: 'center'
    },

    aimsBtn: {
        width: 155,
         right: -5,
         left: -10,
         marginLeft: 20,
         color: 'black',
         textAlign: 'center'
    }
});

export default IntroductionScreen; // Export the introduction screen