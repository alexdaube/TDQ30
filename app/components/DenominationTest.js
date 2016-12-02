'use strict';

import React, {Component} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import SwipeCards from "react-native-swipe-cards";
import Card from "./Card";
import Nav from "./Nav";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";
import Cards from "../domain/Cards";
import Icon from "react-native-vector-icons/FontAwesome";


export default class DenominationTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Cards,
            currentPosition: 1,
            hint: "",
            outOfCards: false,
        };
    }

    handleYup() {
        let currentCard = this._getCurrentCard();
        this._getCurrentCard().score = currentCard.errorReported || currentCard.hinted ? 0 : 1;
        this.setState({
            hint: ''
        });

    }

    handleNope() {
        this.setState({
            hint: ''
        });
    }

    cardRemoved() {
        this.state.currentPosition += 1;
    }

    getHintOne() {
        this._getCurrentCard().hinted = true;
        this.setState({
            hint: this._getCurrentCard().hintOne
        });

    }

    getHintTwo() {
        this._getCurrentCard().hinted = true;
        this.setState({
            hint: this._getCurrentCard().hintTwo
        });
    }

    renderNextCard() {
        var nextCardToRender = this._getCurrentCard();
        return <Card {...nextCardToRender}/>;
    }

    goBack() {
        if (this.state.currentPosition > 1) {

            let previousPosition = this.state.currentPosition - 1;

            // Reset current and previous card (like an undo)
            let currentCard = this.state.cards[this.state.currentPosition - 1];

            currentCard.semantic = false;
            currentCard.phonological = false;
            currentCard.visual = false;
            currentCard.errorReported = false;
            currentCard.hinted = false;
            currentCard.score = 0;

            this.state.cards[this.state.currentPosition - 1] = currentCard;

            let previousCard = this.state.cards[previousPosition - 1];

            previousCard.semantic = false;
            previousCard.phonological = false;
            previousCard.visual = false;
            previousCard.errorReported = false;
            previousCard.hinted = false;
            previousCard.score = 0;

            this.state.cards[previousPosition - 1] = previousCard;

            this.setState({
                currentPosition: previousPosition,
                hint: ''
            });
        } else {
            this.props.navigator.pop();
        }
    }

    goToEndOfTest() {
        this.props.navigator.push({
            id: 'testCompleted',
            name: "Test Results",
            cards: this.state.cards,
            dateOfBirth: this.props.dateOfBirth,
            educationLevel: this.props.educationLevel,
            dossier: this.props.dossier
        });
    }

    addSemanticError() {
        //let currentCard = this._getCurrentCard();
        this._getCurrentCard().semantic = true;
        this._getCurrentCard().errorReported = true;
        // this.state.cards[this.state.currentPosition - 1] = currentCard;
    }

    addPhonologicalError() {
        this._getCurrentCard().phonological = true;
        this._getCurrentCard().errorReported = true;
    }

    addVisualError() {
        this._getCurrentCard().visual = true;
        this._getCurrentCard().errorReported = true;
    }

    _getCurrentCard() {
        return this.state.cards.find((card) => card.position == this.state.currentPosition);
    }

    render() {
        return (
            <View style={styles.container}>

                <Nav
                    type='backLogoHelp'
                    backMethod={this.goBack.bind(this)}
                    backText=''
                    helpMethod={() => this.props.navigator.push({id: 'tutorial'})}
                    homeMethod={() => this.props.navigator.replace({id: 'home'})}/>

                <View style={styles.topContainer}>
                    <View style={{marginRight: 60}}>
                        <Button color={Colors.SEMANTIC}
                                title="S"
                                onPress={this.addSemanticError.bind(this)}/>
                    </View>
                    <View style={{marginRight: 60}}>
                        <Button color={Colors.PHONOLOGICAL}
                                title="P"
                                onPress={this.addPhonologicalError.bind(this)}/>
                    </View>

                    <Button color={Colors.VISUAL}
                            title="V"
                            onPress={this.addVisualError.bind(this)}/>
                </View>

                <View style={styles.cardContainer}>
                    <SwipeCards
                        cards={this.state.cards}
                        loop={false}
                        renderCard={this.renderNextCard.bind(this)}
                        renderNoMoreCards={this.goToEndOfTest.bind(this)}
                        showYup={false}
                        showNope={false}
                        handleYup={this.handleYup.bind(this)}
                        handleNope={this.handleNope.bind(this)}
                        cardRemoved={this.cardRemoved.bind(this)}
                        containerStyle={{backgroundColor: Colors.LIGHT_GREY, alignItems: 'center', margin: 40}}/>
                </View>

                <View Style={styles.hintContainer}>
                    <Text style={styles.hintText}>
                        {this.state.hint}
                    </Text>
                </View>

                <View style={styles.bottomContainer}>
                    <View style={{marginRight: 10}}>
                        <Icon.Button
                            name="low-vision"
                            backgroundColor={Colors.BLACK}
                            onPress={this.getHintOne.bind(this)}
                            borderRadius={Shapes.SQUARE}
                            color={Colors.WHITE}>
                            <Text style={{color: Colors.WHITE}}>Indice S</Text>
                        </Icon.Button>
                    </View>

                    <Icon.Button
                        name="low-vision"
                        backgroundColor={Colors.BLACK}
                        onPress={this.getHintTwo.bind(this)}
                        borderRadius={Shapes.SQUARE}
                        color={Colors.WHITE}>
                        <Text style={{color: Colors.WHITE}}>Indice P</Text>
                    </Icon.Button>

                    <Button color={Colors.RED}
                            title="End"
                            onPress={this.goToEndOfTest.bind(this)}/>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        backgroundColor: Colors.LIGHT_GREY
    },

    topContainer: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    cardContainer: {
        flex: 5
    },
    bottomContainer: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    hintContainer: {
        flex: 0.2
    },
    hintText: {
        fontSize: 12,
        textAlign: 'center',
    }
});