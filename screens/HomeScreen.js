import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, Text, SafeAreaView, ImageBackground, FlatList} from 'react-native';

const HomeScreen = ({state, props, navigation}) => {
    const introData = useSelector(state.introData.introductionData);
    return (
        <View>
           <FlatList style = {style.listStyle} keyExtractor = {item => item.id} renderItem = {} />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default HomeScreen;