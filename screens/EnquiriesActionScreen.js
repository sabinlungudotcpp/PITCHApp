import React from 'react';
import {View, StyleSheet, ScrollView, Text, Platform, FlatList, Image} from 'react-native';
import {Button} from 'react-native-elements';
import ChildProtectionData from '../data/ChildProtectionData';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SIZES = {
    borderRadius: 200
}

const BUTTON_NAMES = {
    backBtn: 'Back',
    nextPolicy: 'Next Policy'
}

const EnquiriesActionScreen = ({props, navigation, item}) => { // Enquiries and Actions Screen

    return (
        <ScrollView>
            <Text style = {styles.enquiriesTxt}>{ChildProtectionData.map(value => value.enquiries_title)}</Text>
                <Image style = {styles.enquiriesImg} source = {require('../assets/Images/ImageEnquiries.jpg')} />

            <Card style = {styles.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.enquiriesTxtStyle}>{item.enquiries_description}</Text>} />
            </Card>

            <Card style = {styles.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.enquiriesSubTxt}>{item.enquiries_description_sub}</Text>} />
            </Card> 

            <View style = {styles.btnContainer}>
                <Button onPress = {() => navigation.navigate('PoorPracticeScreen')} title = {`${BUTTON_NAMES.backBtn}`} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} style = {styles.backBtn} />

                <TouchableOpacity onPress = {() => {}}>
                        <Button title = {`${BUTTON_NAMES.nextPolicy}`} style = {styles.nextPolicyBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} />
                </TouchableOpacity>
            </View>

            <Text style = {styles.aftermathHeading}>{ChildProtectionData.map(title => title.id === 29 ? title.enquiries_heading : null)}</Text>

            <Card style = {styles.cardStyle}>
                <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => item.id === 29 ? <Text style = {styles.enquiriesSubHeadingTxt}>{item.enquiries_heading_sub}</Text> : null} /> 
            </Card>

            <Text style = {styles.allegationTxt}>{ChildProtectionData.map(value => value.id === 30 ? value.enquiries_heading : null)}</Text>

            <Card style = {styles.cardStyle}>
                <FlatList />
            </Card>

            <View style = {styles.btnContainer}>
                <Button onPress = {() => navigation.navigate('PoorPracticeScreen')} title = {`${BUTTON_NAMES.backBtn}`} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} style = {styles.backBtn} />

                <TouchableOpacity onPress = {() => {}}>
                        <Button title = {`${BUTTON_NAMES.nextPolicy}`} style = {styles.nextPolicyBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} />
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    enquiriesTxt: {
        textAlign: 'center',
        marginTop: 60,
        color: Colors.primaryColor,
        fontSize: 31
    },

    enquiriesImg: {
        width: 340,
        height: 180,
        marginLeft: 45,
        marginTop: 30
    },

    cardStyle: {
        padding: 10, 
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 1,
        width: 340,
        height: 160,
        marginLeft: 45,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    enquiriesTxtStyle: {
        marginTop: -13.5
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

    enquiriesSubTxt: {
        marginTop: -13.5,
        padding: -1,
    },

    backBtn: {
        width: 130,
        marginLeft: 20
    },

    nextPolicyBtn: {
        marginLeft: 30,
        width: 130
    },

    aftermathHeading: {
        textAlign: 'center',
        color: Colors.primaryColor,
        fontSize: 31
    },

    allegationTxt: {
        textAlign: 'center',
        color: Colors.primaryColor,
        fontSize: 31,
        marginTop: 40,
        marginBottom: 5
    },

    enquiriesSubHeadingTxt: {
        marginTop: 5
    }
});

export default EnquiriesActionScreen;