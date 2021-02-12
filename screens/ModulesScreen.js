import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Card';

const ModulesScreen = ({props, navigation}) => {
    return (
        <ScrollView>
                <Text style = {styles.titleIntro}>Choose Module</Text>

            <Card style = {styles.cardContainer}>
                <Text style = {styles.childProtectionTitle}>Child Protection</Text>

                <View style = {styles.buttonContainer}>
                  <Button buttonStyle = {{backgroundColor: '#F7B500', width: 145, borderRadius: 200}} title = "View" onPress = {() => {}} />
            </View>
        </Card>
    </ScrollView>
    )
};

const styles = StyleSheet.create({
    titleIntro: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: 50,
        marginLeft: 1,
        color: '#F7B500'
    },

    childProtectionTitle: {
        fontSize: 24,
        marginBottom: 250
    },

    modulesScreen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        marginTop: 20,
        right: 10
    },

    cardContainer: {
        width: 350,
        left: -40,
        height: 370,
        maxWidth: '100%',
        alignItems: 'center',
        marginLeft: 70
    },

    moduleContainer: {
        backgroundColor: 'red'
    },

    button: {
        flexDirection: 'row',
        borderRadius: 200,
        width: 140,
        color: 'white',
        fontSize: 30
    },

    btnText: {
        color: 'red'
    }
});

export default ModulesScreen;