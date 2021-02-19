import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => { // Card Component
    return (
        <View style = {{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({ // Styles for the card
    card: {
        shadowColor: 'black', // Shadow color of black
        shadowOffset: {width: 2, height: 1},
        shadowRadius: 2.4, // Shadow radius value of 6
        shadowOpacity: 0.45,
        backgroundColor: 'white',
        elevation: 10,
        marginTop: 30,
        marginLeft: 20,
        padding: 30,
        marginBottom:  10,
        borderRadius: 10
    }
})

export default Card; // Export the card