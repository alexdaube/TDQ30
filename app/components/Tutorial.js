'use strict';

import React, {Component} from "react";
import {StyleSheet, Image, Text, View, ScrollView} from "react-native";
import Nav from "./Nav";
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";
import Icon from "react-native-vector-icons/Ionicons";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";

export default class Tutorial extends Component {

    closeTutorial() {
        this.props.navigator.pop();
    }

    render() {
        let _scrollView: ScrollView;
        return (
            <View style={styles.container}>
                <Nav
                    type='modal'
                    modalTitle="Tutoriel"
                    closeMethod={this.closeTutorial.bind(this)}/>

                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={true}
                    alwaysBounceVertical={false}>


                    <View style={styles.tutorialImageContainer}>
                        <Image
                            source={require('../assets/images/tdq30Tutorial.png')}
                            style={{width: 250,height: 150, marginTop: 5, marginBottom: 5}}/>
                    </View>

                    <View style={styles.tutorialContainer}>

                        <View style={styles.tutorialItemContainer}>
                            <Text style={[styles.instructionText, {color: Colors.BLACK}]}>
                                <AwesomeIcon name="check" size={24} color={Colors.GREEN}/>
                                Glisser l'image vers la droite pour assigner une bonne réponse et passer à la prochaine image
                            </Text>
                            <Text style={[styles.instructionText, {color: Colors.BLACK}]}>
                                <AwesomeIcon name="remove" size={24} color={Colors.RED}/>
                                Glisser l'image vers la gauche pour assigner une mauvaise réponse et passer à la prochaine image
                            </Text>


                            <Text style={[styles.instructionText, {color: Colors.PALE_RED}]}>
                                Clicker <Icon name="md-return-left" size={24} color={Colors.PALE_RED}/>
                                pour revenir à l'image précédente
                            </Text>

                            <Text style={[styles.instructionText, {color: Colors.POWDER_BLUE}]}>
                                Clicker <Icon name="ios-information-circle" size={24} color={Colors.POWDER_BLUE}/>
                                pour voir ce tutoriel
                            </Text>

                            <Text style={[styles.instructionText, {color: Colors.SEMANTIC}]}>
                                Clicker S pour ajouter une erreur sémantique
                            </Text>

                            <Text style={[styles.instructionText, {color: Colors.PHONOLOGICAL}]}>
                                Clicker P pour ajouter une erreur phonologique
                            </Text>

                            <Text style={[styles.instructionText, {color: Colors.VISUAL}]}>
                                Clicker V pour ajouter une erreur visuelle
                            </Text>

                            <Text style={[styles.instructionText, {color: Colors.BLACK}]}>
                                Clicker <AwesomeIcon name="low-vision" size={24} color={Colors.BLACK}/>
                                pour donner un indice
                            </Text>

                        </View>
                    </View>


                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.LIGHT_GREY
    },


    tutorialContainer: {
        paddingTop: 10,
    },

    tutorialImageContainer: {
        backgroundColor: Colors.POWDER_BLUE,
        alignItems: 'center'
    },

    tutorialItemContainer: {},

    tutorialLabel: {},

    tutorialContent: {
        paddingLeft: 30,
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: Colors.POWDER_BLUE,
        borderRadius: Shapes.SQUARE
    },

    iconTextContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    testFinishedText: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    instructionText: {
        fontSize: 14,
        color: Colors.PALE_RED
    },

    tutorialText: {
        fontSize: 14,
        color: Colors.POWDER_BLUE
    },

    scrollView: {
        backgroundColor: '#6A85B1',
        height: 300,
    },
    horizontalScrollView: {
        height: 120,
    },
});