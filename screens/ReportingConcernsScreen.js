import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Text, FlatList, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import Card from '../components/Card';
import ChildProtectionData from '../data/ChildProtectionData';

const ReportingConcernsScreen = ({props, navigation, item}) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style = {styles.reportingConcernsTitle}>{ChildProtectionData.map(value => value.title_concerns)}</Text>

                <Image style = {styles.concernImg} source = {(require('../assets/Images/ImageConcerns.jpg'))} />

                <Card style = {styles.cardStyle}>
                    <FlatList />
                </Card>


            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    reportingConcernsTitle: {
        color: Colors.primaryColor,
        textAlign: 'center',
        marginTop: 60,
        fontSize: 29
    },

    concernImg: {
        width: 280,
        height: 180
    }
})

export default ReportingConcernsScreen;