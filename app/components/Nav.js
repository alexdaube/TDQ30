import React, {Component} from "react";
import {StyleSheet, Image, Text, Button, View, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

let logo = function (homeMethod) {
    return (
        <View>
            <TouchableOpacity style={styles.logo} onPress={homeMethod}>
                <Image source={require('../assets/images/tdqLogo.png')}
                       resizeMode="contain"
                       style={styles.logo}/>
            </TouchableOpacity>
        </View>
    );
};

let help = function (helpMethod) {
    return (
        <View style={[styles.icon, styles.iconRight]}>
            <Icon.Button name="ios-information-circle"
                         color={Colors.POWDER_BLUE}
                         backgroundColor="transparent"
                         size={28}
                         onPress={helpMethod}/>
        </View>
    );
};

export default class Nav extends Component {
    backLogoHelp() {
        return (
            <View style={styles.container}>
                <View style={[styles.icon, styles.iconLeft]}>
                    <Icon.Button name="md-return-left"
                                 color={Colors.PALE_RED}
                                 backgroundColor="transparent"
                                 size={28}
                                 onPress={this.props.backMethod}>
                        <Text> {this.props.backText}</Text>
                    </Icon.Button>
                </View>
                {logo(this.props.homeMethod)}
                {help(this.props.helpMethod)}
            </View>
        );
    }

    logo() {
        return (
            <View style={styles.container}>
                <View/>
                {logo(this.props.homeMethod)}
                <View/>
            </View>
        );
    }

    logoHelp() {
        return (
            <View style={styles.container}>
                <View style={{paddingRight: 55}}/>
                {logo(this.props.homeMethod)}
                {help(this.props.helpMethod)}
            </View>
        );
    }

    modal() {
        return (
            <View style={styles.container}>
                <View/>
                <View style={{paddingTop: 10}}>
                    <Text style={styles.logoText}>{this.props.modalTitle}</Text>
                </View>
                <View style={{paddingTop: 10}}>
                    <Icon.Button name="ios-close-circle"
                                 color={Colors.BLACK}
                                 backgroundColor="transparent"
                                 size={32}
                                 onPress={this.props.closeMethod}/>
                </View>
            </View>
        );
    }

    render() {
        if (this.props.type == 'backLogoHelp') {
            return (<View>{this.backLogoHelp()}</View>);
        } else if (this.props.type == 'logoHelp') {
            return (<View>{this.logoHelp()}</View>);
        }
        else if (this.props.type == 'modal') {
            return (<View>{this.modal()}</View>);
        }
        else {
            return (<View>{this.logo()}</View>);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },

    icon: {
        paddingTop: 10
    },

    iconLeft: {
        paddingLeft: 10
    },

    iconRight: {
        paddingRight: 10
    },

    logo: {
        width: 100,
        height: 60
    },

    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.BLACK
    }
});

