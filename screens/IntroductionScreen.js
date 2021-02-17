import React from 'react';
import {FlatList, View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card';
import introductionData from '../data/IntroductionData';

const IntroductionScreen = ({props, navigation, item}) => {
    return (
        <ScrollView>
            
            <Text style = {styles.introductionTxt}>Introduction</Text>

    <Card style = {styles.cardStyle}>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {styles.introText}>{item.main_sub_description_intro}</Text>} keyExtractor = {(item) => item.id} />
     </Card>

     <Card style = {styles.cardStyle}>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {styles.introText}>{item.main_sub_description_intro}</Text>} keyExtractor = {(item) => item.id} />
     </Card>

     <Card style = {styles.cardStyle}>
        <FlatList data = {introductionData} renderItem = {({item}) => <Text style = {styles.introText}>{item.main_sub_description_intro}</Text>} keyExtractor = {(item) => item.id} />
     </Card>

        <View>

        </View>
     <Button title = "Back"/>
     <Button title = "View Aims"/>
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
        fontSize: 15,
        marginTop: -5
    },

    cardStyle: {
        padding: -5,
        paddingLeft: -20,
        marginBottom: 10,
        width: 350,
        height: 170,
        marginLeft: 40,
        alignItems: 'center',
        maxWidth: '100%'
    }
});

export default IntroductionScreen; // Export the introduction screen