import React, {Component} from "react";
import {StyleSheet, Image, Text, Button, View, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

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
    }
});

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
        // Props: homeMethod, backMethod, backText, helpMethod
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
        // Props: homeMethod
        return (
            <View style={styles.container}>
                <View/>
                {logo(this.props.homeMethod)}
                <View/>
            </View>
        );
    }

    logoHelp() {
        // Props: homeMethod, helpMethod
        return (
            <View style={styles.container}>
                {logo(this.props.homeMethod)}
                {help(this.props.helpMethod)}
            </View>
        );
    }

    modal() {
        // Props: closeMethod
        return (
            <View style={styles.container}>
                <Icon.Button name="ion-close-circled"
                             color={Colors.RED}
                             backgroundColor="transparent"
                             size={24}
                             onPress={this.props.closeMethod}/>
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

