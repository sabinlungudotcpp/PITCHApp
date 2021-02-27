import React from 'react';
import {View, ScrollView, Text, FlatList, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import ChildProtectionData from '../data/ChildProtectionData';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const PoorPracticeScreen = ({item, navigation, props}) => {
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

          <View style = {styles.btnContainer}>
              <Button style = {styles.backBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} onPress = {() => navigation.navigate('AllegationsScreen')} title = "Back" />
              <Button style = {styles.nextPolicyBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} onPress = {() => {}} title = "Next Policy" />
          </View>

        </ScrollView>
    )
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
        padding: 10, // Has a padding space of 12
        paddingLeft: -40, // Padding left of -40
        paddingBottom: -5, // Padding bottom of -5
        marginBottom: 1,
        width: 340,
        height: 150,
        marginLeft: 45,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    poorPracticeTxt: {
        marginTop: -13
    },

    poorPracticeSubTxt: {
        marginTop: -13
    },

    btnContainer: { // Button container styles

    },

    backBtn: {

    },

    nextPolicyBtn: {

    }

    
});


export default PoorPracticeScreen; // Export the poor practice screen