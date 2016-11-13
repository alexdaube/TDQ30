'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, TouchableOpacity, View, Dimensions, Button} from "react-native";
import SwipeCards from "react-native-swipe-cards";
import Card from "./Card";
import ScoreCard from "./ScoreCard";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";

var image1 = require('../assets/images/wolf_1.jpg');
var image2 = require('../assets/images/lion_2.jpg');
var image3 = require('../assets/images/cat_3.jpg');

const Cards = [
    {id: 1, image: image1, name: 'wolf'},
    {id: 2, image: image2, name: 'lion'},
    {id: 3, image: image3, name: 'cat'}
];

export default class DenominationTest extends Component {
    constructor(props) {
        super(props);
        let {height, width} = Dimensions.get('window');
        this.state = {
            cards: Cards,
            outOfCards: false,
            layout:{
                height:height,
                width:width
            }
        };
    }

    getResults() {
        this.props.navigator.push({
            title: "Test Results",
            component: ScoreCard,
            passProps: {results: ["Result1", "Result2", "Result3", "Result4", "Result1", "Result2", "Result3", "Result4", "Result1", "Result2", "Result3", "Result4"]}
        });
    }

    handleYup() {
        console.log("yup");
    }

    handleNope() {
        console.log("nope")
    }

    cardRemoved(index) {
        console.log(`The index is ${index}`);
    }

    launchTest() {
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
            <View style={[styles.container, this.getContainerPadding()]} onLayout={this._onLayout.bind(this)}>
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
                        renderCard={(cardData) => <Card {...cardData} />}
                        renderNoMoreCards={this.getResults.bind(this)}
                        showYup={false}
                        showNope={false}
                        handleYup={this.handleYup}
                        handleNope={this.handleNope}
                        cardRemoved={this.cardRemoved}
                        containerStyle={{backgroundColor: '#f7f7f7', alignItems: 'center', margin: 40}}/>
                </View>

                <View Style={styles.hintContainer}>
                    <Text style={styles.hintText}>
                        Je commence par L
                    </Text>
                </View>

                <View style={styles.bottomContainer}>
                    <Button color={Colors.DARK_GOLD}
                            title="Hint1"
                            onPress={this.launchTest.bind(this)}/>

                    <Button color={Colors.BLACK}
                            title="Hint2"
                            onPress={this.launchTest.bind(this)}/>

                    <Button color={Colors.POWDER_BLUE}
                            title="Hint3"
                            onPress={this.launchTest.bind(this)}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10
    },
    topContainer: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    cardContainer: {
        height: 210
    },
    bottomContainer: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    hintContainer: {

    },
    hintText: {
        fontSize: 12,
        textAlign: 'center',

    }
});