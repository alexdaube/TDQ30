'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, View, Dimensions, Button} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Nav from "./Nav";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";
import Space from "./Space";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
        alignItems: 'center',
        paddingTop: 30
    },

    testFinishedText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default class TestCompleteCard extends Component {
    goToResults() {
        this.props.navigator.replace({
            id: 'result',
            name: "Test Results",
            cards: this.props.cards,
            dateOfBirth: this.props.dateOfBirth,
            educationLevel: this.props.educationLevel,
            dossier: this.props.dossier
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Nav
                    type='logoHelp'
                    helpMethod={() => this.props.navigator.push({id: 'tutorial'})}
                    homeMethod={() => this.props.navigator.replace({id: 'home'})}/>
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