import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const HeaderButton = (props) => {
    return <HeaderButton {...props} IconComponent = {Ionicons} iconSize = {23} color = {} />
};

export default HeaderButton;