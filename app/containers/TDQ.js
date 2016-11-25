'use strict';

import React, {Component} from 'react';
import {StyleSheet, NavigatorExperimental} from 'react-native';

import Main from '../components/Main';

const {
    CardStack: NavigationCardStack,
    StateUtils: NavigationStateUtils,
} = NavigationExperimental;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111111"
    }
});


class TDQ extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // This defines the initial navigation state.
            navigationState: {
                index: 0,// Starts with first route focused.
                routes: [{key: 'My Initial Scene'}], // Starts with only one route.
            }
        };

        // We'll define this function later - hang on
        this._onNavigationChange = this._onNavigationChange.bind(this);
    }

    _onNavigationChange(type) {
        // It's literally the next step. We'll get to it!
    }


    render() {
        return (
            <Text>This is a placeholder. We will come back to this and render our navigation here later.</Text>
        );
    }
}



