'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, TouchableOpacity, View, Dimensions, Button} from "react-native";
import SwipeCards from "react-native-swipe-cards";
import Card from "./Card";
import ScoreCard from "./ScoreCard";
import TestCompleteCard from "./TestCompleteCard";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";
import Cards from "../constants/Cards";

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
        console.log("This is Yup action with card at position: " +  this.state.currentPosition);
    }

    handleNope() {
        console.log("This is Nope action with card at position: " +  this.state.currentPosition);
    }

    cardRemoved() {
        this.state.currentPosition += 1;
    }

    getHintOne() {
        this.setState({
            hint: this.state.cards.find((card) => card.position == this.state.currentPosition).hintOne
        });

    }

    renderNextCard() {
        var nextCardToRender = this.state.cards.find((card) => card.position == this.state.currentPosition);
        return <Card {...nextCardToRender}/>;
    }

    getHintTwo() {
        this.setState({
            hint: this.state.cards.find((card) => card.position == this.state.currentPosition).hintTwo
        });
    }

    launchTest() {}

    goToPreviousCard() {
        if (this.state.currentPosition > 1) {
            let previousPosition = this.state.currentPosition - 1;
            this.setState({
                currentPosition : previousPosition,
                hint: ""
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
                            onPress={this.launchTest.bind(this)}/>

                    <Button color={Colors.RED}
                            title="Hint2"
                            onPress={this.launchTest.bind(this)}/>

                    <Button color={Colors.DARK_GOLD}
                            title="Hint3"
                            onPress={this.launchTest.bind(this)}/>
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