import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Card';

const ModulesScreen = ({props, navigation}) => {
    return (
        <ScrollView>

            <Card style = {styles.cardContainer}>
                <Text style = {styles.childProtectionTitle}>Child Protection</Text>
                <Image style = {{width: 230, height: 180, marginTop: -230, marginBottom: 35}} source = {require('../assets/Images/ChildProtection.jpg')}/>

                <View style = {styles.buttonContainer}>
                  <Button buttonStyle = {{backgroundColor: '#F7B500', width: 200, borderRadius: 200, marginLeft: -1}} title = "View" onPress = {() => {}} />
            </View>
        </Card>
    </ScrollView>
    )
};

const styles = StyleSheet.create({
    titleIntro: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: 30,
        marginLeft: 1,
        color: '#F7B500'
    },

    childProtectionTitle: {
        fontSize: 24,
        marginBottom: 250,
        color: '#F7B500'
    },

    modulesScreen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        marginTop: 20,
        right: 10
    },

    cardContainer: {
        width: 340,
        left: -40,
        height: 360,
        maxWidth: '100%',
        alignItems: 'center',
        marginLeft: 77
    },
});

export default ModulesScreen;