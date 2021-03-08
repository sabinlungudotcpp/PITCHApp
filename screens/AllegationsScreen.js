import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, Text, Image, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    width: 320,
    height: 180,
    marginLeft: 50
}

const AllegationsScreen = ({item, navigation, props}) => { // The allegations screen used.
    try {
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
                    <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {style.investigationTxt}>{item.allegation_investigation}</Text>} />
                </Card>
    
                <View style = {style.btnContainer}>
                    <Button style = {style.backBtn} onPress = {() => navigation.navigate('RecruitmentGuidelines')} buttonStyle = {{marginRight: Platform.OS === 'android' ? 30 : null, marginLeft: Platform.OS === 'android' ? 15 : null, width: Platform.OS === 'android' ? 130 : null, backgroundColor: Colors.primaryColor, borderRadius: 200}} title = "Back" />

                    <TouchableOpacity onPress = {() => navigation.navigate('PoorPracticeScreen')}>
                        <Button style = {style.nextPolicyBtn} buttonStyle = {{width: Platform.OS === 'android' ? 130 : null, backgroundColor: Colors.primaryColor, borderRadius: 200}} title = "Next Policy" />
                    </TouchableOpacity>

                </View>
            </ScrollView>
        )
    } 
    
    catch(error) {
        if(error) {
            return console.error(error.toString());
        }
    }
};

const style = StyleSheet.create({ // Styles for the allegations screen
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

    investigationTxt: {
        marginTop: -12
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
        marginBottom: Platform.OS === 'android' ? -18.5 : -13.5
    },

    btnContainer: {
        width: 110,
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: 47,
        marginTop: 35,
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
        marginLeft: 3
    },

    nextPolicyBtn: {
        width: 160,
        right: -5,
        left: -10,
        marginLeft: 30,
        color: 'black',
        textAlign: 'center'
    }
});

export default AllegationsScreen; // Exports the allegations screen