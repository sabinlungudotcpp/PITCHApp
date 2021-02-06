import React from 'react';
import {HeaderButtons} from 'react-navigation-header-buttons';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const HeaderButton = (props) => {
    return <HeaderButtons {...props} IconComponent = {Ionicons} iconSize = {23} color = {Platform.OS === 'android' ? 'green' : 'white'} />
};

export default HeaderButton;