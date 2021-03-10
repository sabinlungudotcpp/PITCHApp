import React from 'react';
import {ScrollView, Text, FlatList, Platform, StyleSheet, Image, SafeAreaView, View} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SIZES = {
    borderRadius: 200
}

const BullyingScreen = ({item, navigation}) => {
    return (
    <SafeAreaView style = {styles.safeView}>

            <ScrollView>
            <Text style = {styles.bullyingTxt}>{ChildProtectionData.map(title => title.title_bullying)}</Text>
            <Image style = {styles.bullyingImg} source = {(require('../assets/Images/ImageBullying.jpg'))} />

            <Card style = {styles.cardStyles}>
                        
            </Card>

            <View style = {styles.btnContainer}>
                <Button onPress = {() => navigation.navigate('EnquiriesActionScreen')} buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} style = {styles.backBtn} title = "Back" />

                <TouchableOpacity onPress = {() => {}}>
                     <Button buttonStyle = {{backgroundColor: Colors.primaryColor, borderRadius: SIZES.borderRadius}} style = {styles.nextPolicyBtn} title = "Next Policy" />
                </TouchableOpacity>
            </View>

        </ScrollView>
    </SafeAreaView>

        
    )
};

const styles = StyleSheet.create({
    bullyingTxt: {
        fontSize: 31,
        color: Colors.primaryColor,
        textAlign: 'center',
        marginTop: 30
    },

    safeView: {
        flex: 1
    },

    cardStyles: {
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

    bullyingImg: {
        width: 300,
        height: 170,
        marginLeft: 60,
        marginTop: 30
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
        width: 130,
        marginLeft: 20
    },

    nextPolicyBtn: {
        width: 130,
        marginLeft: 20
    }
});

export default BullyingScreen;