'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, View, Button, TextInput, Switch} from "react-native";
import Nav from "./Nav";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";

export default class ResultEdit extends Component {
    constructor(props) {
        super(props);
        let scoreBool = this.props.card.score > 0;
        this.state = {
            scoreBool: scoreBool,
            semanticIsOn: this.props.card.semantic,
            phonologicalIsOn: this.props.card.phonological,
            visualIsOn: this.props.card.visual,
        };
    }
    closeResultEdit() {
        this.props.navigator.pop();
    }

    saveResult() {
        this.props.navigator.replace({
            id: 'result',
            name: 'result',
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
                    type='modal'
                    modalTitle="Modifier un résultat"
                    closeMethod={this.closeResultEdit.bind(this)}/>

                <Switch
                    onValueChange={(value) => this.setState({score: value})}
                    style={{marginBottom: 10}}
                    value={this.state.scoreBool} />

                <Switch
                    onValueChange={(value) => this.setState({semanticIsOn: value})}
                    style={{marginBottom: 10}}
                    value={this.state.semanticIsOn}
                    disabled={this.scoreBool}/>

                <Switch
                    onValueChange={(value) => this.setState({phonologicalIsOn: value})}
                    style={{marginBottom: 10}}
                    value={this.state.phonologicalIsOn}
                    disabled={this.scoreBool}/>

                <Switch
                    onValueChange={(value) => this.setState({visualIsOn: value})}
                    style={{marginBottom: 10}}
                    value={this.state.visualIsOn}
                    disabled={this.scoreBool}/>


                <View style={styles.buttonContainer}>
                    <Button color={Colors.WHITE}
                            title="Sauvegarder"
                            onPress={this.saveResult.bind(this)}/>
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
