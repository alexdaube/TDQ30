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
                            style={{width: 275,height: 150, marginTop: 5, marginBottom: 5}}/>
                    </View>

                    <View style={styles.tutorialContainer}>

                        <View style={styles.tutorialItemContainer}>
                            <Text style={[styles.instructionText, {color: Colors.BLACK}]}>
                                <AwesomeIcon name="check" size={24} color={Colors.GREEN}/>&nbsp;
                                Glisser l'image vers la droite
                                &nbsp;(vers <Icon name="ios-information-circle" size={24} color={Colors.POWDER_BLUE}/>)&nbsp;
                                 pour assigner <Text style={{color:Colors.GREEN}}>une bonne réponse</Text> et passer à la prochaine image
                            </Text>
                            <Text style={[styles.instructionText, {color: Colors.BLACK}]}>
                                <AwesomeIcon name="remove" size={24} color={Colors.RED}/>&nbsp;
                                Glisser l'image vers la gauche
                                &nbsp;(vers <Icon name="md-return-left" size={24} color={Colors.PALE_RED}/>)&nbsp;
                                pour assigner <Text style={{color:Colors.RED}}>une mauvaise réponse</Text> et passer à la prochaine image
                            </Text>

                            <Text style={[styles.instructionText, {color: Colors.DARK_GREY, fontWeight: 'bold'}]}>
                                <AwesomeIcon name="exclamation-triangle" size={24} color={Colors.GOLD}/>&nbsp;
                                 Dès qu'un bouton d'erreur ou d'indice a été activé, <Text style={{color:Colors.RED}}>une mauvaise réponse</Text> est assigner, peut importe le bord où on glisse l'image par la suite
                            </Text>

                            <Text style={[styles.instructionText, {color: Colors.SEMANTIC}]}>
                                Clicker S pour ajouter une erreur sémantique
                                &nbsp;<AwesomeIcon name="lightbulb-o" size={24} color={Colors.SEMANTIC}/>
                            </Text>

                            <Text style={[styles.instructionText, {color: Colors.PHONOLOGICAL}]}>
                                Clicker P pour ajouter une erreur phonologique
                                &nbsp;<AwesomeIcon name="hard-of-hearing" size={24} color={Colors.PHONOLOGICAL}/>
                            </Text>

                            <Text style={[styles.instructionText, {color: Colors.VISUAL}]}>
                                Clicker V pour ajouter une erreur visuelle
                                &nbsp;<AwesomeIcon name="eye" size={24} color={Colors.VISUAL}/>
                            </Text>

                            <Text style={[styles.instructionText, {color: Colors.BLACK}]}>
                                Clicker
                                &nbsp;<AwesomeIcon name="low-vision" size={24} color={Colors.BLACK}/>&nbsp;
                                pour donner un indice
                            </Text>


                            <Text style={[styles.instructionText, {color: Colors.PALE_RED}]}>
                                Clicker <Icon name="md-return-left" size={24} color={Colors.PALE_RED}/>&nbsp;
                                 pour revenir à l'image précédente
                            </Text>

                            <Text style={[styles.instructionText, {color: Colors.POWDER_BLUE}]}>
                                Clicker <Icon name="ios-information-circle" size={24} color={Colors.POWDER_BLUE}/> pour voir ce tutoriel
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
        marginLeft: 10
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