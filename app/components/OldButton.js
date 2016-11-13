'use strict';

import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";
import Platform from 'Platform';


const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.GREEN,
        padding: 10,
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 8
    },
    whiteFont: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 8
    }
});

export default class Button extends Component {

    customizeButton(propStyles) {
        return {
            backgroundColor: propStyles.color,
            padding: 10,
            alignItems: 'center',
            borderWidth: 0,
            marginRight: 5,
            borderRadius: propStyles.shape,
        }
    }

    render() {
        const customButtonStyles = {
            color: this.props.color ? this.props.color : Colors.GREEN,
            shape: typeof(this.props.shape) === 'number' ? this.props.shape : Shapes.DEFAULT
        };
        return (
            <TouchableOpacity
                style={this.customizeButton(customButtonStyles)}
                onPress={this.props.onPress}>
                <Text style={styles.whiteFont}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}
