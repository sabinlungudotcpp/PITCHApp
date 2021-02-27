import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';

const MARGIN_SIZES = {
    marginTop: 35,
    marginBottom: 1,
    marginLeft: 45
}

const PADDING_SIZES = { // Padding sizes
    padding: 10,
    paddingLeft: -40,
    paddingBottom: -5
}

const CARD_SIZES = { // The Card sizes
    width: 340,
    height: 150
};

const IMAGE_SIZES = {
    width: 320
}

const AllegationsScreen = ({item, navigation, props}) => { // The allegations screen used.
    return (
        <ScrollView>
            <Text style = {style.allegationMainTxt}>{ChildProtectionData.map(value => value.allegation_title)}</Text>
            <Image style = {style.allegationImg} source = {require('../assets/Images/ImageAllegations.jpg')} />

            <Card style = {style.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.allegationTxt}>{item.allegations_description}</Text>} />
            </Card>

            <Card style = {style.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.allegationTxt}>{item.allegations_sub_description}</Text>} />
            </Card>

            <Card style = {style.cardStyle}>

            </Card>

            <View style = {style.btnContainer}>
                <Button style = {style.backBtn} onPress = {() => {}} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} title = "Back" />
                <Button style = {style.nextPolicyBtn} onPress = {() => {}} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} title = "Next Policy" />
            </View>

        </ScrollView>
    )
};

const style = StyleSheet.create({
    allegationMainTxt: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: 50,
        color: Colors.primaryColor // The color of the text
    },
    
    allegationImg: {
        width: IMAGE_SIZES.width,
        height: 180,
        marginLeft: 50,
        marginTop: 30
    },

    cardStyle: { // Styles for the card
        padding: PADDING_SIZES.padding,
        paddingLeft: PADDING_SIZES.paddingLeft,
        paddingBottom: PADDING_SIZES.paddingBottom,
        marginBottom: MARGIN_SIZES.marginBottom,
        width: CARD_SIZES.width,
        height: CARD_SIZES.height,
        marginLeft: MARGIN_SIZES.marginLeft,
        marginTop: MARGIN_SIZES.marginTop,
        alignItems: 'center', // Aligns the content of the items to the center
        maxWidth: '100%' // Maximum width of 100%
    },

    allegationTxt: {
        marginBottom: -13.5
    },

    backBtn: {

    },

    nextPolicyBtn: {
        
    }
});

export default AllegationsScreen; // Exports the allegations screen