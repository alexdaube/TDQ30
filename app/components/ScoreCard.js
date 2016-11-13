'use strict';

import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableHighlight, TextInput, ListView} from "react-native";
import Space from './Space';
import Separator from './Separator';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    buttonText: {
        fontSize: 18,
        color: Colors.WHITE
    },
    button: {
        height: 60,
        backgroundColor: Colors.POWDER_BLUE,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    searchInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: "#111",
        flex: 3
    },
    rowContainer: {
        padding: 10,
    },
    emailContainer: {
        backgroundColor: "#E3E3E3",
        alignItems: "center",
        flexDirection: "row"
    }
});

export default class ScoreCard extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        this.state = {
            dataSource: this.ds.cloneWithRows(this.props.results),
            email: ''
        };
    }

    handleChange(event) {
        this.setState({
            email: event.nativeEvent.text
        });
    }

    handleSubmit() {
    }

    renderRow(rowData) {
        return (
            <View>
                <View style={styles.rowContainer}>
                    <Text> {rowData} </Text>
                </View>
                <Separator />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderHeader={()=><Text>Here are the results</Text>}/>

                <Space length={10}/>

                <View style={styles.emailContainer}>

                    <TextInput
                        style={styles.searchInput}
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        placeholder="Email"/>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.handleSubmit.bind(this)}
                        underlayColor="#88D4F5">
                        <Text style={styles.buttonText}> Submit </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}