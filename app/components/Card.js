'use strict';


import React, {Component} from "react";
import {StyleSheet, Image, Text, View, Dimensions} from "react-native";

let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
    },
    thumbnail: {
        width: 150,
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

