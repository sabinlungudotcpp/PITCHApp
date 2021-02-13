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
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6, // Shadow radius value of 6
        shadowOpacity: 0.40,
        backgroundColor: 'white',
        elevation: 10,
        marginTop: 35,
        marginLeft: 20,
        padding: 25,
        borderRadius: 12
    }
})

export default Card; // Export the card