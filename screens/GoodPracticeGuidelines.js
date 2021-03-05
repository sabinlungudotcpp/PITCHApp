import React from 'react';
import {View, StyleSheet, ScrollView, Text, FlatList, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../components/Card';
import GuidelineData from '../data/GuidelineData';
import Colors from '../constants/Colors';
import GoodPracticeData from '../data/GoodPracticeData';

const GoodPracticeGuidelines = ({props, navigation, item}) => { // Good Practice Guidelines Component

    return (
        <ScrollView>
            <Text style = {style.goodPracticeGuidelinesTxt}>{GuidelineData.map(value => value.title_practice)}</Text>

          <Card style = {style.cardStyle}>
             <FlatList keyExtractor = {(item) => item.id} data = {GoodPracticeData} renderItem = {({item}) => item.description_practice.startsWith('1.') || item.description_practice.startsWith('2. ') || item.description_practice.startsWith('3. ') || item.description_practice.startsWith('4. ') || item.description_practice.startsWith('5. ') ? <Text style = {style.descriptionStyles}>{item.description_practice}</Text> : null} />
          </Card>
    
         <Card style = {style.cardStyle}>
             <FlatList keyExtractor = {(item) => item.id} data = {GoodPracticeData} renderItem = {({item}) => item.description_id >= 1006 && item.description_id <= 1011 ? <Text style = {style.descriptionStyles}>{item.description_practice}</Text> : null}  />
         </Card>


         <Card style = {style.cardStyle}>
            <FlatList data = {GoodPracticeData} renderItem = {({item}) => item.description_id >= 1012 && item.description_id <= 1018 ? <Text style = {style.descriptionStyles}>{item.description_practice}</Text> : null} />
         </Card>

        <View style = {style.btnContainer}>
            <Button onPress = {() => navigation.navigate('GoodPracticeScreen')} style = {style.guidelineBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} title = "Back" />
        </View>

        </ScrollView>
    )
}

const style = StyleSheet.create({
    goodPracticeGuidelinesTxt: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 50,
        color: '#F7B500'
    },

    cardStyle: {
        padding: 12,
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 30,
        width: 350,
        height: 220,
        marginLeft: 35,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    descriptionStyles: {
        fontSize: 15.7
    },

    guidelineBtn: {
        width: 170,
        marginRight: 20,
        paddingLeft: 5,
        marginLeft: 120,
        marginTop: 10,
        marginBottom: 30
    }
});

export default GoodPracticeGuidelines;