import React from 'react';
import {View, ScrollView, Text, FlatList, StyleSheet, Image, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import ChildProtectionData from '../data/ChildProtectionData';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SIZES = {
    borderRadius: 200
}

const PoorPracticeScreen = ({item, navigation, props}) => { // The poor practice screen component

 try {

    return (

     <ScrollView>
     
     <Text style = {styles.policyTitleTxt}>{ChildProtectionData.map(value => value.poor_practice_title)}</Text>
         <Image style = {styles.concernImg} source = {(require('../assets/Images/ImageConcerns.jpg'))} />
    
        <Card style = {styles.cardStyle}>
            <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.poorPracticeTxt}>{item.poor_practice_description}</Text>} />
        </Card>
        
         <Card style = {styles.cardStyle}>
            <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.poorPracticeSubTxt}>{item.poor_practice_sub_description}</Text>} />
         </Card>
        
         <View>
            <Text style = {styles.abuseTitle}>{ChildProtectionData.map(value => value.abuse_title)}</Text>
                 <Image style = {styles.abuseImg} source = {(require('../assets/Images/ImageAbuse.jpg'))} />
         </View>
        
         <Card style = {styles.cardStyle}>
            <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.abuseDescription}>{item.abuse_description}</Text>} />
         </Card>
        
          <View style = {styles.btnContainer}>

            <Button style = {styles.backBtn} buttonStyle = {{marginLeft: Platform.OS === 'android' ? 30 : null ,marginRight: Platform.OS === 'android' ? 25: null ,width: Platform.OS === 'android' ? 120 : null,backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} onPress = {() => navigation.navigate('AllegationsScreen')} title = "Back" />
        
        <TouchableOpacity onPress = {() => navigation.navigate('EnquiriesActionScreen')} >
             <Button style = {styles.nextPolicyBtn} buttonStyle = {{width: Platform.OS === 'android' ? 120 : null, backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} title = "Next Policy" />
        </TouchableOpacity>

         </View>
    </ScrollView>
        )
    } 
    
    catch(error) {
        if(error) {
            return console.error(`Cause of error ${error.toString()}`);
        }
    }
};

const styles = StyleSheet.create({
    policyTitleTxt: {
        textAlign: 'center',
        marginTop: 50,
        color: Colors.primaryColor,
        fontSize: 29
    },

    concernImg: {
        width: 330,
        height: 180,
        marginLeft: 50,
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

    poorPracticeTxt: {
        marginTop: Platform.OS === 'android' ? -18.5 : -13,
        fontSize: Platform.OS === 'android' ? 15 : 15
    },

    poorPracticeSubTxt: {
        marginTop: -13
    },

    btnContainer: { // Button container styles
        width: 110,
        height: 42,
        textAlign: 'center',
        borderRadius: 200,
        marginLeft: Platform.OS === 'android' ? 47 : 47,
        marginTop: 35,
        paddingHorizontal: -20,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        marginBottom: 50
    },

    backBtn: { // Style for the back button
        width: 145,
        marginLeft: 10
    },

    nextPolicyBtn: {
        width: 160,
        right: -5,
        left: -10,
        marginLeft: 30,
        color: 'black',
        textAlign: 'center'
    },

    abuseTitle: {
        textAlign: 'center',
        marginTop: 39,
        color: Colors.primaryColor,
        fontSize: 29
    },

    abuseImg: {
        width: 320,
        height: 180,
        marginLeft: 55,
        marginTop: 20
    },

    abuseDescription: {
        marginTop: -13,
        paddingLeft: 5,
    }
});


export default PoorPracticeScreen; // Export the poor practice screen