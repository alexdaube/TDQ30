import React, {Component} from "react";
import {StyleSheet, View, TouchableHighlight, Text, Button, Image} from "react-native";
import Setup from "./Setup";
import Tutorial from './Tutorial';
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";
import Space from "./Space";
import Nav from "./Nav";
import Icon from 'react-native-vector-icons/Ionicons';


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
            marginLeft: 40,
            marginRight: 40,
            backgroundColor: Colors.GREEN,
            borderRadius: Shapes.SQUARE
        },
        iconButtonContainer: {
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
);

export default class Main extends Component {
    goToTestSetup() {
        this.props.navigator.push({
            id: "setup",
            name: "Configuration patient",
        });
    }

    openTutorial() {
        this.props.navigator.push({
            id: 'tutorial',
            name: 'tutorial'
        });
    }

    goToSettings() {
        this.props.navigator.replace({
            id: 'setting',
            name: 'settings'
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <Nav homeMethod={() => this.props.navigator.replace({id: 'home'})}/>

                <Space length={40}/>

                <View style={styles.buttonContainer}>
                    <Button color={Colors.WHITE}
                            title="Démarrer TDQ30"
                            onPress={this.goToTestSetup.bind(this)}/>
                </View>

                <Space length={5}/>

                <View style={styles.iconButtonContainer}>
                    <Icon.Button
                        name="ios-information-circle"
                        backgroundColor={Colors.LIGHT_GREY}
                        onPress={this.openTutorial.bind(this)}
                        borderRadius={Shapes.SQUARE}
                        color={Colors.BLACK}>
                        <Text>Tutoriel</Text>
                    </Icon.Button>
                </View>

                <Space length={5}/>

                <View style={styles.iconButtonContainer}>
                    <Icon.Button
                        name="ios-cog"
                        backgroundColor={Colors.LIGHT_GREY}
                        onPress={this.goToTestSetup.bind(this)}
                        borderRadius={Shapes.SQUARE}
                        color={Colors.BLACK}>
                        <Text>Paramètres</Text>
                    </Icon.Button>
                </View>
            </View>
        );
    }
}