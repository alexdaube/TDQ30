'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, View, Button, Modal} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ScoreCard from "./ScoreCard";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";

import Space from "./Space";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHT_GREY
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: Colors.POWDER_BLUE,
        borderRadius: Shapes.SQUARE
    },

    iconTextContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    testFinishedText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default class Tutorial extends Component {
    close() {}
    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.tutorialVisibility}
                onRequestClose={this.props.onTutorialClose}>
                <View style={styles.container}>
                    <Icon.Button name="times-circle"
                                 color={Colors.RED}
                                 backgroundColor="transparent"
                                 size={20}
                                 onPress={this.close.bind(this)}/>
                    <Text>This is a modal</Text>
                </View>
            </Modal>
        );
    }
}