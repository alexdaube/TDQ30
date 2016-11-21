'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, View, Dimensions, Button} from "react-native";
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

export default class TestCompleteCard extends Component {
    goToResults() {
        this.props.navigator.push({
            title: "Test Results",
            component: ScoreCard,
            passProps: {dateOfBirth: this.props.dateOfBirth, educationLevel: this.props.educationLevel,  dossier: this.props.dossier}
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconTextContainer}>
                    <Text style={styles.testFinishedText}>
                        <Icon name="check-circle" color={Colors.GREEN} size={24}/> Test terminé
                    </Text>
                </View>
                <Space length={10}/>
                <View style={styles.buttonContainer}>
                    <Button color={Colors.WHITE}
                            title="Résultats"
                            onPress={this.goToResults.bind(this)}/>
                </View>
            </View>
        );
    }
}