'use strict';

import React, {Component} from "react";
import {Navigator, View} from "react-native";
import Main from "../components/Main";
import Tutorial from "../components/Tutorial";
import Setup from "../components/Setup";
import DenominationTest from "../components/DenominationTest";
import TestCompleteCard from "../components/TestCompleteCard";
import ScoreCard from "../components/ScoreCard";
import Setting from "../components/Setting";
import ResultEdit from "../components/ResultEdit";


export default class TDQ extends Component {
    constructor(props) {
        super(props);
    }

    renderScene(route, navigator) {

        var {state, actions} = this.props;
        var routeId = route.id;

        if (routeId == 'home') {
            return (
                <Main
                    {...this.props}
                    navigator={navigator}/>
            );
        }
        else if (routeId === 'settings') {
            return (
                <Setting
                    {...this.props}
                    navigator={navigator}/>
            );
        }
        else if (routeId == 'tutorial') {
            return (
                <Tutorial
                    {...this.props}
                    navigator={navigator}/>
            );
        }

        else if (routeId == 'setup') {
            return (
                <Setup
                    {...this.props}
                    navigator={navigator}/>
            );
        }

        else if (routeId == 'test') {
            return (
                <DenominationTest
                    {...this.props}
                    navigator={navigator}
                    dateOfBirth={route.dateOfBirth}
                    educationLevel={route.educationLevel}
                    dossier={route.dossier}/>
            );
        }

        else if (routeId == 'testCompleted') {
            return (
                <TestCompleteCard
                    {...this.props}
                    navigator={navigator}
                    dateOfBirth={route.dateOfBirth}
                    educationLevel={route.educationLevel}
                    dossier={route.dossier}
                    cards={route.cards}/>
            );
        }

        else if (routeId == 'result') {
            return (
                <ScoreCard
                    {...this.props}
                    navigator={navigator}
                    dateOfBirth={route.dateOfBirth}
                    educationLevel={route.educationLevel}
                    dossier={route.dossier}
                    cards={route.cards}/>
            );
        }

        else if (routeId == 'resultEdit') {
            return (
                <ResultEdit
                    {...this.props}
                    navigator={navigator}
                    dateOfBirth={route.dateOfBirth}
                    educationLevel={route.educationLevel}
                    dossier={route.dossier}
                    cards={route.cards}
                    card={route.card}/>
            );
        }

        else {
            return (
                <Main
                    {...this.props}
                    navigator={navigator}/>
            );
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Navigator
                    style={{flex:1}}
                    ref={'NAV'}
                    initialRoute={{id: 'home', name: 'home'}}
                    renderScene={this.renderScene.bind(this)}/>
            </View>
        );
    }
}



