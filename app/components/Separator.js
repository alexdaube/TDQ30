'use strict';

import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

var styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: Colors.LIGHT_GREY,
        flex: 1,
        marginLeft: 15,
        marginRight: 15
    }
});

export default class Separator extends Component {
    render() {
        return (
            <View style={styles.separator} />
        );
    }
};