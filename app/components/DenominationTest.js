'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, TouchableOpacity, View, Dimensions, Button} from "react-native";
import SwipeCards from "react-native-swipe-cards";
import Card from "./Card";
import ScoreCard from "./ScoreCard";
import TestCompleteCard from "./TestCompleteCard";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";
import Cards from "../domain/Cards";

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
        this._getCurrentCard().score =  currentCard.errorReported || currentCard.hinted ? 0 : 1;
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
                currentPosition : previousPosition,
                hint: ''
            });
        }
    }

    goToEndOfTest() {
        this.props.navigator.push({
            title: "Test Results",
            component: TestCompleteCard,
            passProps: {dateOfBirth: this.props.dateOfBirth, educationLevel: this.props.educationLevel,  dossier: this.props.dossier}
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
            layout:{
                height:event.nativeEvent.layout.height,
                width:event.nativeEvent.layout.width
            }
        });
    }

    getContainerPadding() {
        return (this.state.layout.width > this.state.layout.height) ?  {paddingTop: 35} :  {paddingTop: 75};
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.topBufferContainer}/>
                <View style={styles.topContainer}>
                    <Button color={Colors.GREEN}
                            title="Hint1"
                            onPress={this.addSemanticError.bind(this)}/>

                    <Button color={Colors.RED}
                            title="Hint2"
                            onPress={this.addPhonologicalError.bind(this)}/>

                    <Button color={Colors.DARK_GOLD}
                            title="Hint3"
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
                    <Button color={Colors.DARK_GOLD}
                            title="Hint1"
                            onPress={this.getHintOne.bind(this)}/>

                    <Button color={Colors.BLACK}
                            title="Hint2"
                            onPress={this.getHintTwo.bind(this)}/>


                    <Button color={Colors.BLACK}
                            title="Previous"
                            onPress={this.goToPreviousCard.bind(this)}/>

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
    topBufferContainer: {
        flex:1
    },
    topContainer: {
        flex:0.5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    cardContainer: {
        flex: 5
    },
    bottomContainer: {
        flex:0.5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    hintContainer: {
        flex:0.2
    },
    hintText: {
        fontSize: 12,
        textAlign: 'center',

    }
});