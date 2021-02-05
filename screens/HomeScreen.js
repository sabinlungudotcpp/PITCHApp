import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, Text, SafeAreaView, ImageBackground, FlatList, Image, ScrollView} from 'react-native';
import introData from '../data/IntroductionData';

const HomeScreen = ({props, state, navigation}) => {
    return (
        <ScrollView>
                <View>
            <Text style = {style.text}>{introData.map(data => data.module_text)}</Text>
            <Image style = {style.imageStyle} source = {require('../assets/Images/ImageEnquiries.jpg')} />
        </View>
    </ScrollView>
        
    )
}

HomeScreen.navigationOptions = {
    headerTitle: 'Introduction'
}

const style = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginVertical: 100
    },

    imageStyle: {
        height: 300,
        width: 300,
        marginLeft: 50
    }
});

export default HomeScreen;