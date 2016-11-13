import React, { Component } from 'react';
import {StyleSheet, View, TouchableHighlight, Text, Button} from 'react-native';
import Setup from "./Setup";

import Colors from "../constants/Colors"
import Shapes from "../constants/Shapes"
import Space from "./Space";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },
});



/*
 <TouchableHighlight
 style={styles.startButton}
 onPress={this.goToTestSetup.bind(this)}
 underlayColor="#88D4F5">

 <Text style={styles.buttonText}>Start Test</Text>
//  </TouchableHighlight>*/
//
//
// <Button
//     style={{fontSize: 20, color: 'green'}}
//     styleDisabled={{color: 'red'}}
//     onPress={() => this.goToTestSetup.bind(this)}>
//     Press Me!
// </Button>


export default class Main extends Component {
    goToTestSetup() {
        this.props.navigator.push({
            title: "Test Setup",
            component: Setup
            //passProps: {userInfo: this.props.userInfo}
        });
    }


    goToSettings() {
        this.props.navigator.push({
            title: "Test Setup",
            component: Setup
        });
    }

    render() {
        return(
            <View style={styles.container}>

                    <Button color={Colors.GREEN}
                            onPress={this.goToTestSetup.bind(this)}>
                        Start Test
                    </Button>


                <Space length={10} />

                    <Button color={Colors.GOLD}
                            onPress={this.goToTestSetup.bind(this)}>
                        Settings
                    </Button>

            </View>
        );
    }
}