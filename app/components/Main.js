import React, {Component} from "react";
import {StyleSheet, View, TouchableHighlight, Text, Button} from "react-native";
import Setup from "./Setup";
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
            backgroundColor: Colors.POWDER_BLUE
        },

        buttonContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
            marginLeft: 40,
            marginRight: 40,
            backgroundColor: Colors.GREEN,
            borderRadius: Shapes.DEFAULT
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
            title: "Configuration TDQ30",
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
        return (
            <View style={styles.container}>
                <View style={styles.iconButtonContainer}>
                    <Icon.Button
                        name="question-circle"
                        backgroundColor={Colors.LIGHT_GREY}
                        onPress={this.goToTestSetup.bind(this)}
                        borderRadius={Shapes.DEFAULT}
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
                        borderRadius={Shapes.DEFAULT}
                        color={Colors.BLACK}>
                        <Text>Paramètres</Text>
                    </Icon.Button>
                </View>


                <Space length={5}/>

                <View style={styles.buttonContainer}>
                    <Button color={Colors.WHITE}
                            title="Démarrer TDQ30"
                            onPress={this.goToTestSetup.bind(this)}/>
                </View>

            </View>
        );
    }
}