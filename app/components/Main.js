import React, {Component} from "react";
import {StyleSheet, View, TouchableHighlight, Text, Button} from "react-native";
import Setup from "./Setup";
import Tutorial from './Tutorial';
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";
import Space from "./Space";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 30,
            flexDirection: 'column',
            justifyContent: 'center',
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
    constructor(props) {
        super(props);
        this.state = {
            showTutorial: false
        };
    }

    goToTestSetup() {
        this.props.navigator.push({
            title: "Configuration patient",
            component: Setup
            //passProps: {userInfo: this.props.userInfo}
        });
    }

    openTutorial() {
        this.setState({
            showTutorial: true
        });
    }

    closeTutorial() {
        this.setState({
            showTutorial: false
        });
    }


    goToSettings() {
        this.props.navigator.push({
            title: "Test Setup",
            component: Setup
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Tutorial tutorialVisibility={this.state.showTutorial} onTutorialClose={this.closeTutorial.bind(this)}/>

                <View style={styles.buttonContainer}>
                    <Button color={Colors.WHITE}
                            title="Démarrer TDQ30"
                            onPress={this.goToTestSetup.bind(this)}/>
                </View>

                <Space length={5}/>

                <View style={styles.iconButtonContainer}>
                    <Icon.Button
                        name="question-circle"
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
                        name="gear"
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