import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, ScrollView, SafeAreaView, Platform, Modal} from 'react-native';
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
                    <FlatList data = {ChildProtectionData} keyExtractor = {(item) => item.id} renderItem = {({item}) => <Text>{item.slum_soccer_description}</Text>} />
                </Card>

                <View style = {styles.btnContainer}>

                    <TouchableOpacity onPress = {() => navigation.navigate('ModulesScreen')}>
                        <Button style = {styles.backBtn} buttonStyle = {{ marginBottom: Platform.OS === 'android' ? 30 : null ,marginTop: Platform.OS === 'android' ? 30 : null ,marginLeft: Platform.OS === 'android' ? 150 : null ,width: Platform.OS === 'android' ? 120 : null, backgroundColor: Colors.primaryColor, borderRadius: 200}} title = "Back" />
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

    backBtn: {
        width: 140,
        marginLeft: 145,
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