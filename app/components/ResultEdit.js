'use strict';

import React, {Component} from "react";
import {StyleSheet, Text, View, Button, Switch} from "react-native";
import Nav from "./Nav";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";

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
        this._updateCurrentCard();
        this.props.navigator.replace({
            id: 'result',
            name: 'result',
            cards: this.props.cards,
            dateOfBirth: this.props.dateOfBirth,
            educationLevel: this.props.educationLevel,
            dossier: this.props.dossier
        });
    }

    _updateCurrentCard() {
        this.props.card.score = this.state.scoreBool ? 1 : 0;
        this.props.card.semantic = this.state.semanticIsOn;
        this.props.card.phonological = this.state.phonologicalIsOn;
        this.props.card.visual = this.state.visualIsOn;
        this.props.card.errorReported = (this.props.card.semantic || this.props.card.phonological || this.props.card.visual);
        this.props.cards[this.props.card.position - 1] = this.props.card;
    }

    scoreValueChange(value) {
        let newState = {scoreBool: value};
        if (value) {
            newState.semanticIsOn = false;
            newState.phonologicalIsOn = false;
            newState.visualIsOn = false;
        }
        this.setState(newState);
    }

    semanticValueChange(value) {
        let newState = {semanticIsOn: value};
        this._setNewStateForErrorValueChange(value, newState);
    }

    phonologicalValueChange(value) {
        let newState = {phonologicalIsOn: value};
        this._setNewStateForErrorValueChange(value, newState);
    }

    visualValueChange(value) {
        let newState = {visualIsOn: value};
        this._setNewStateForErrorValueChange(value, newState);
    }

    _setNewStateForErrorValueChange(value, newState) {
        if (value) {newState.scoreBool = false;}
        this.setState(newState);
    }

    render() {
        return (
            <View style={styles.container}>
                <Nav
                    type='modal'
                    modalTitle={ "Modifier " + this.props.card.name}
                    closeMethod={this.closeResultEdit.bind(this)}/>
                <View style={styles.switcherContainer}>
                    <View style={styles.inlineSwitchContainer}>
                        <Text style={styles.switchLabel}>Bonne Réponse : </Text>
                        <Switch
                            onValueChange={this.scoreValueChange.bind(this)}
                            style={{marginBottom: 10}}
                            value={this.state.scoreBool} />
                    </View>
                    <View style={styles.inlineSwitchContainer}>
                        <Text style={styles.switchLabel}>
                            <AwesomeIcon name="lightbulb-o" size={24} color={Colors.SEMANTIC}/>
                            &nbsp;Erreur Sémantique :&nbsp;
                        </Text>
                        <Switch
                            onValueChange={this.semanticValueChange.bind(this)}
                            style={{marginBottom: 10}}
                            value={this.state.semanticIsOn}
                            disabled={this.scoreBool}/>
                    </View>


                    <View style={styles.inlineSwitchContainer}>
                        <Text style={styles.switchLabel}>
                            <AwesomeIcon name="hard-of-hearing" size={24} color={Colors.PHONOLOGICAL}/>
                            &nbsp;Erreur Phonologique :&nbsp;
                        </Text>
                        <Switch
                            onValueChange={this.phonologicalValueChange.bind(this)}
                            style={{marginBottom: 10}}
                            value={this.state.phonologicalIsOn}
                            disabled={this.scoreBool}/>
                    </View>


                    <View style={styles.inlineSwitchContainer}>
                        <Text style={styles.switchLabel}>
                            <AwesomeIcon name="eye" size={24} color={Colors.VISUAL}/>
                            &nbsp;Erreur Visuelle :&nbsp;
                        </Text>
                        <Switch
                            onValueChange={this.visualValueChange.bind(this)}
                            style={{marginBottom: 10}}
                            value={this.state.visualIsOn}
                            disabled={this.scoreBool}/>
                    </View>




                    <View style={styles.buttonContainer}>
                        <Button color={Colors.WHITE}
                                title="Sauvegarder"
                                onPress={this.saveResult.bind(this)}/>
                    </View>
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

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        marginLeft: 75,
        marginRight: 75,
        backgroundColor: Colors.GREEN,
        borderRadius: Shapes.SQUARE
    },

    switcherContainer: {
        marginTop: 10
    },

    inlineSwitchContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },

    switchLabel: {
        marginRight: 10
    }
});
