'use strict';

import React, { Component } from 'react';
import {View} from 'react-native';

export default class Space extends Component {
    render() {
        return (
            <View style={{margin: this.props.length}} />
        );
    }
}

Space.propTypes = {
    length: React.PropTypes.number.isRequired
};