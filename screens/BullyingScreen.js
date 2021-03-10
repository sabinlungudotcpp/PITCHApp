import React from 'react';
import {ScrollView, Text, FlatList, Platform, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';

const BullyingScreen = ({item, navigation}) => {
    return (
        <ScrollView>
            <Text style = {styles.bullyingTxt}>{ChildProtectionData.map(title => title.title_bullying)}</Text>

            <Image style = {styles.bullyingImg} source = {(require('../assets/Images/ImageBullying.jpg'))} />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    bullyingTxt: {
        fontSize: 31,
        color: Colors.primaryColor,
        textAlign: 'center',
        marginTop: 30
    },

    bullyingImg: {
        width: 300,
        height: 170,
        marginLeft: 60,
        marginTop: 30
    }
});

export default BullyingScreen;