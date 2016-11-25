'use strict';

import React, {Component} from "react";
import {Navigator, View} from "react-native";
import Main from "../components/Main";
//import Settings from "../components/Settings";
import Tutorial from "../components/Tutorial";
import Setup from "../components/Setup";
import DenominationTest from "../components/DenominationTest";
import TestCompleteCard from "../components/TestCompleteCard";
import ScoreCard from "../components/ScoreCard";


export default class TDQ extends Component {
    constructor(props) {
        super(props);
    }

    renderScene(route, navigator) {
        var {state, actions} = this.props;
        var routeId = route.id;

        //debugger;
        if (routeId == 'home') {
            return (
                <Main
                    {...this.props}
                    navigator={navigator}/>
            );
        }
        // else if (routeId === 'settings') {
        //     return (
        //         <Messages
        //             {...this.props}
        //             navigator={navigator}/>
        //     );
        // }
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
                    navigator={navigator}/>
            );
        }

        else if (routeId == 'testCompleted') {
            return (
                <TestCompleteCard
                    {...this.props}
                    navigator={navigator}/>
            );
        }

        else if (routeId == 'result') {
            return (
                <ScoreCard
                    {...this.props}
                    navigator={navigator}/>
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



