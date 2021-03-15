import React from 'react';
import {View, StyleSheet, Image, ScrollView, FlatList, Platform, Modal, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Card from '../../components/Card';
import Colors from '../../constants/Colors';
import EstablishStreetSoccerData from '../../data/EstablishStreetSoccerData';

const EstablishStreetSoccerModules = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Establish Soccer Modules</Text>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});

export default EstablishStreetSoccerModules;