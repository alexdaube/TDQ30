'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, View} from "react-native";
import Nav from "./Nav";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.LIGHT_GREY
    },

    closeButtonContainer: {
        flex: 0.5,
        alignItems: 'flex-end'
    },

    tutorialContainer: {
        flex: 10,
        flexDirection: 'column'
    },

    tutorialItemContainer: {},

    tutorialLabel: {},

    tutorialContent: {
        paddingLeft: 30,
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

export default class Setting extends Component {

    closeTutorial() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Nav
                    type='modal'
                    closeMethod={this.closeTutorial.bind(this)}/>

                <View style={styles.tutorialContainer}>
                    <View style={styles.tutorialItemContainer}>
                        <Text style={styles.tutorialLabel}>
                            Passer à la prochaine image du test:
                        </Text>
                        <Text style={styles.tutorialContent}>
                            Glisser l'image vers la droite pour une bonne réponse
                        </Text>
                        <Text style={styles.tutorialContent}>
                            Glisser l'image vers la gauche pour une mauvaise réponse
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}