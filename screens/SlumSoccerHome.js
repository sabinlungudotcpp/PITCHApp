import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, ScrollView, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';

const SlumSoccerHome = ({props, navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style = {styles.introTxt}>Slum Soccer</Text>

                <Image style = {styles.slumSoccerImg} source = {(require('../assets/Images/SlumSoccerImg.jpg'))} />

                <Card style = {styles.cardStyle}>

                </Card>

                
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
    }
});

export default SlumSoccerHome;