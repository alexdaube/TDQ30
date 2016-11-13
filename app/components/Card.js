'use strict';


import React, {Component} from "react";
import {StyleSheet, Image, Text, View} from "react-native";

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
    },
    thumbnail: {
        width: 200,
        height: 150
    }
});

export default class Card extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.thumbnail} source={this.props.image}/>
            </View>
        );
    }
}

