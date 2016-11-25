import React, {Component} from "react";
import {StyleSheet, Image, Text, Button, View, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

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
        <Icon.Button name="ion-information-circled"
                     color={Colors.RED}
                     backgroundColor="transparent"
                     size={24}
                     onPress={helpMethod}/>
    );
};

export default class Nav extends Component {
    backLogoHelp() {
        // Props: homeMethod, backMethod, backText, helpMethod
        return (
            <View style={styles.container}>
                <Icon.Button name="ion-arrow-left-c"
                             color={Colors.RED}
                             backgroundColor="transparent"
                             size={24}
                             onPress={this.props.backMethod}>
                    <Text> this.props.backText</Text>
                </Icon.Button>
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

