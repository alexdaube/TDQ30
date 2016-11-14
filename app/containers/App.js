'use strict';


import React, { Component } from 'react';
import {StyleSheet, NavigatorIOS} from 'react-native';

import Main from '../components/Main';


//import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';

// import * as reducers from '../reducers';
// import *

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
// const store = createStoreWithMiddleware(reducer);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111111"
    }
});

export default class App extends Component {
    render() {
        return(
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: "Menu Principal",
                    component: Main
                }}/>
        );
    }
}