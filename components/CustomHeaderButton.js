import React from 'react';
import {HeaderButtons, HeaderButton} from 'react-navigation-header-buttons';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const CustomHeaderButton = props => {
    return <HeaderButton {...props} IconComponent = {Ionicons} iconSize = {23} color = {Platform.OS === 'android' ? 'white' : 'black'} />
};

export const CustomHeaderButtons = (props) => {
    return <HeaderButtons HeaderButtonComponent = {CustomHeaderButton} {...props} />;
  };
  
  export { Item } from 'react-navigation-header-buttons';