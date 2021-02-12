import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ModulesScreen = ({props, navigation}) => {
    return (
        <ScrollView>
                <Text style = {styles.titleIntro}>Modules Screen</Text>
                
                
        </ScrollView>
        
    )
};

const styles = StyleSheet.create({
    titleIntro: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 30
    }
});

export default ModulesScreen;