'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, View, Button, TextInput} from "react-native";
import Nav from "./Nav";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";

export default class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    handleChange(newEmail) {
        this.setState({
            email: newEmail
        });
    }

    closeSettings() {
        this.props.navigator.pop();
    }

    saveSettings() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Nav
                    type='modal'
                    modalTitle="Paramètres"
                    closeMethod={this.closeSettings.bind(this)}/>

                <View style={styles.settingsContainer}>
                    <TextInput
                        style={styles.dossierNumberInput}
                        value={this.state.email}
                        autoCorrect={false}
                        onChangeText={this.handleChange.bind(this)}
                        placeholder="Votre email"/>
                </View>


                <View style={styles.buttonContainer}>
                    <Button color={Colors.WHITE}
                            title="Sauvegarder"
                            onPress={this.saveSettings.bind(this)}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.LIGHT_GREY
    },

    settingsContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: 20
    },

    dossierNumberInput: {
        height: 30,
        width: 200,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        color: Colors.BLACK,
        backgroundColor: Colors.WHITE
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        marginLeft: 75,
        marginRight: 75,
        backgroundColor: Colors.GREEN,
        borderRadius: Shapes.SQUARE
    }
});