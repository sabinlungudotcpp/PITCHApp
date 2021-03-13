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
                <Text>Reporting Concerns Screen</Text>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

})

export default ReportingConcernsScreen;