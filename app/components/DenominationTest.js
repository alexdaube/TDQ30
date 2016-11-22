'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, TouchableOpacity, View, Dimensions, Button} from "react-native";
import SwipeCards from "react-native-swipe-cards";
import Card from "./Card";
import TestCompleteCard from "./TestCompleteCard";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";
import Cards from "../domain/Cards";
import Icon from "react-native-vector-icons/FontAwesome";


export default class DenominationTest extends Component {
    constructor(props) {
        super(props);
        // let {height, width} = Dimensions.get('window');
        this.state = {
            cards: Cards,
            currentPosition: 1,
            hint: "",
            outOfCards: false,
            // layout:{
            //     height:height,
            //     width:width
            // }
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

    goToPreviousCard() {
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
        }
    }

    goToEndOfTest() {
        this.props.navigator.push({
            title: "Test Results",
            component: TestCompleteCard,
            passProps: {
                cards: this.state.cards,
                dateOfBirth: this.props.dateOfBirth,
                educationLevel: this.props.educationLevel,
                dossier: this.props.dossier
            }
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


    _onLayout(event) {
        this.setState({
            layout: {
                height: event.nativeEvent.layout.height,
                width: event.nativeEvent.layout.width
            }
        });
    }

    getContainerPadding() {
        return (this.state.layout.width > this.state.layout.height) ? {paddingTop: 35} : {paddingTop: 75};
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.topBufferContainer}/>
                <View style={styles.topContainer}>
                    <View style={{marginRight: 60}}>
                        <Button color={Colors.GREEN}
                                title="1"
                                onPress={this.addSemanticError.bind(this)}/>
                    </View>
                    <View style={{marginRight: 60}}>
                        <Button color={Colors.POWDER_BLUE}
                                title="2"
                                onPress={this.addPhonologicalError.bind(this)}/>
                    </View>

                    <Button color={Colors.DARK_GOLD}
                            title="3"
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
                            <Text style={{color: Colors.WHITE}}>Indice 1</Text>
                        </Icon.Button>
                    </View>

                    <Icon.Button
                        name="low-vision"
                        backgroundColor={Colors.BLACK}
                        onPress={this.getHintTwo.bind(this)}
                        borderRadius={Shapes.SQUARE}
                        color={Colors.WHITE}>
                        <Text style={{color: Colors.WHITE}}>Indice 2</Text>
                    </Icon.Button>
                </View>
            </View>
        )
    }
}

// <Button color={Colors.RED}
// title="End"
// onPress={this.goToEndOfTest.bind(this)}/>

//
// <Button color={Colors.BLACK}
// title="Previous"
// onPress={this.goToPreviousCard.bind(this)}/>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        backgroundColor: Colors.LIGHT_GREY
    },
    topBufferContainer: {
        flex: 1
    },
    topContainer: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
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