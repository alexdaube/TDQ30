'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, View, Button, Modal} from "react-native";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";
import Icon from "react-native-vector-icons/FontAwesome";


const supportedOrientationsPickerValues = [
    ['portrait'],
    ['landscape'],
    ['landscape-left'],
    ['portrait', 'landscape-right'],
    ['portrait', 'landscape'],
    [],
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 10,
        flexDirection: 'column',
        justifyContent: 'center',
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

export default class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSupportedOrientation: 0,
            currentOrientation: 'unknown'
        };
    }

    closeTheModal() {
        this.props.tutorialClose();
    }

    render() {

        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.tutorialVisibility}
                supportedOrientations={supportedOrientationsPickerValues[this.state.selectedSupportedOrientation]}
                onOrientationChange={(event) => this.setState({currentOrientation: event.nativeEvent.orientation})}>
                <View style={styles.container}>
                    <View style={styles.closeButtonContainer}>
                        <Icon.Button name="times-circle"
                                     color={Colors.RED}
                                     backgroundColor="transparent"
                                     size={24}
                                     onPress={this.closeTheModal.bind(this)}/>

                    </View>
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

            </Modal>
        );
    }
}