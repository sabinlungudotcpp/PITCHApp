import React from 'react';
import {HeaderButtons, HeaderButton} from 'react-navigation-header-buttons';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

/**
 * 
 * @param {props} : Takes in properties for other components which allows data to be passed 
 */

const CustomHeaderButton = props => { // Custom Header Button component returns a header button with an icon and size.
    return <HeaderButton {...props} IconComponent = {Ionicons} iconSize = {23} color = {Platform.OS === 'android' ? 'white' : 'black'} />
};

export const CustomHeaderButtons = (props) => { // Exports the buttons
    return <HeaderButtons HeaderButtonComponent = {CustomHeaderButton} {...props} />;
  };
  
  export { Item } from 'react-navigation-header-buttons';