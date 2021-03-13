import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Text, FlatList, Image, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ReportingConcernsScreen = ({props, navigation, item}) => {

    return (

        <SafeAreaView style = {styles.safeView}>
            <ScrollView>
                <Text style = {styles.reportingConcernsTitle}>{ChildProtectionData.map(value => value.title_concerns)}</Text>

                <Image style = {styles.concernImg} source = {(require('../assets/Images/ImageConcerns.jpg'))} />

                <Card style = {styles.cardStyle}>
                    <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text style = {styles.concernsTxt}>{item.concerns_description}</Text>} />
                </Card>

                <View style = {styles.btnContainer}>
                    <Button onPress = {() => navigation.navigate('BullyingScreen')} style = {styles.backBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} title = "Back" />

                    <TouchableOpacity onPress = {() => navigation.navigate('ProvidingInformationScreen')} >
                            <Button style = {styles.nextPolicyBtn} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: 200}} title = "Next Policy" />
                    </TouchableOpacity>
                </View>

            
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

    safeView: {
        flex: 1
    },

    reportingConcernsTitle: {
        color: Colors.primaryColor,
        textAlign: 'center',
        marginTop: 60,
        fontSize: 29
    },

    concernImg: {
        width: 320,
        height: 190,
        marginLeft: 55,
        marginTop: 30
    },

    cardStyle: {
        padding: 10, 
        paddingLeft: -40,
        paddingBottom: -5,
        marginBottom: 1,
        width: 340,
        height: 160,
        marginLeft: 48,
        marginTop: 35,
        alignItems: 'center',
        maxWidth: '100%'
    },

    concernsTxt: {
        marginTop: -13.5,
        fontSize: 15
    },  

    btnContainer: {
        width: 110, // Width of the container is 120
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
        marginLeft: 10,
        marginRight: 20
    },

    nextPolicyBtn: {
        width: 155
    },

    modalBtn: {
        width: 150,
        marginLeft: 130,
        marginTop: 100,
    }
})

export default ReportingConcernsScreen;