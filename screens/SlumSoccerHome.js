import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, ScrollView, SafeAreaView, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChildProtectionData from '../data/ChildProtectionData';

const SlumSoccerHome = ({props, navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style = {styles.introTxt}>{ChildProtectionData.map(value => value.main_title)}</Text>

                <Image style = {styles.slumSoccerImg} source = {(require('../assets/Images/SlumSoccerImg.jpg'))} />

                <Card style = {styles.cardStyle}>

                </Card>

                <View style = {styles.btnContainer}>

                    <TouchableOpacity>
                        <Button title = "Back" />
                    </TouchableOpacity>
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    introTxt: {
        textAlign: 'center',
        fontSize: 31,
        marginTop: 31,
        color: Colors.primaryColor
    },

    slumSoccerImg: {
        width: 310,
        height: 180,
        marginLeft: 66,
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
    }
});

export default SlumSoccerHome;