import React from 'react';
import {View, ScrollView, StyleSheet, FlatList, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../../components/Card';
import ChildProtectionData from '../../data/ChildProtectionData';
import Colors from '../../constants/Colors';

const SIZES = {
    borderRadius: 200,
    fontSize: 14.5
}

const RecruitmentGuidelines = ({props, navigation, items}) => { // Recruitment Guidelines component
    return (
        <ScrollView>
            <Text style = {style.guidelineTitle}>{ChildProtectionData.map(data => data.guideline_title)}</Text>

            <Card style = {style.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.guidelineDescriptionTxt}>{item.guideline_description}</Text>}/>
            </Card>

            <Card style = {style.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => item.id >= 8 && item.id <= 12 ? <Text>{item.guideline_list}</Text> : null} />
            </Card>

            <Text style = {style.trainingTxt}>{ChildProtectionData.map(data => data.guideline_training)}</Text>

            <Card style = {style.cardStyle}>
                <FlatList data = {ChildProtectionData} />
            </Card>

            <View style = {style.buttonContainer}>
                <Button onPress = {() => {}} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} title = "Back"/>
                <Button onPress = {() => {}} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} title = "Next Policy" />
            </View>


        </ScrollView>
    )
};

const style = StyleSheet.create({
    guidelineTitle: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 31,
        color: Colors.primaryColor
    },

    cardStyle: {
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

    guidelineDescriptionTxt: {
        marginTop: -12,
        fontSize: SIZES.fontSize
    },

    trainingTxt: {
        textAlign: 'center',
        fontSize: 31,
        marginTop: 45,
        color: Colors.primaryColor
    }
})

export default RecruitmentGuidelines;