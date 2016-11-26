import React, {Component} from "react";
import {StyleSheet, View, TouchableHighlight, Text, Picker, ScrollView, Button, TextInput} from "react-native";
import Nav from "./Nav";
import Colors from "../constants/Colors";
import educationLevels from "../constants/EducationLevels";
import years from "../constants/Years";

const Item = Picker.Item;

export default class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateOfBirth: 1980,
            educationLevel: 3,
            dossier: ''
        };
    }

    launchTest() {
        this.props.navigator.push({
            id: 'test',
            name: "TDQ30",
            dateOfBirth: this.state.dateOfBirth,
            educationLevel: this.state.educationLevel,
            dossier: this.state.dossier
        });
    }

    generateDatesOfBirth() {
        return years.map((item, index) => {
            return <Item label={item.toString()} value={item} key={index}/>
        });
    }

    dateOfBirthOnSelect(year) {
        this.setState({
            dateOfBirth: year
        });
    }

    generateEducationLevels() {
        return educationLevels.map((item, index) => {
            return <Item label={item.name} value={item.level} key={index}/>
        });
    }

    educationLevelOnSelect(level) {
        this.setState({
            educationLevel: level
        });
    }

    handleChange(text) {
        this.setState({
            dossier: text
        });
    }


    render() {
        return (
            <View style={styles.container}>

                <Nav
                    type='backLogoHelp'
                    backMethod={() => this.props.navigator.pop()}
                    backText=''
                    helpMethod={() => this.props.navigator.push({id: 'tutorial'})}
                    homeMethod={() => this.props.navigator.replace({id: 'home'})}/>


                <View style={styles.dossierNumberContainer}>
                    <TextInput
                        style={styles.dossierNumberInput}
                        value={this.state.dossier}
                        autoCorrect={false}
                        onChangeText={this.handleChange.bind(this)}
                        placeholder="# de dossier"/>
                </View>


                <View style={styles.pickersContainer}>

                    <View style={styles.containerPicker}>
                        <Text style={styles.labelPicker}>Naissance:</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.dateOfBirth}
                            onValueChange={this.dateOfBirthOnSelect.bind(this)}
                            mode="dropdown"
                            itemStyle={styles.pickerItem}>
                            {this.generateDatesOfBirth()}
                        </Picker>
                    </View>


                    <View style={styles.containerPicker}>
                        <Text style={styles.labelPicker}>Éducation:</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.educationLevel}
                            onValueChange={this.educationLevelOnSelect.bind(this)}
                            mode="dropdown"
                            itemStyle={styles.pickerItem}>
                            {this.generateEducationLevels()}
                        </Picker>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button color={Colors.WHITE}
                            onPress={this.launchTest.bind(this)}
                            title="Lancer le TDQ30"
                            accessibilityLabel="Lancer le TDQ30"/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHT_GREY
    },

    dossierNumberContainer: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-end',
        paddingTop: 5
    },

    dossierNumberInput: {
        height: 30,
        width: 200,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        color: Colors.BLACK,
        backgroundColor: Colors.WHITE
    },

    pickersContainer: {
        paddingTop: 5,
        flex: 4,
        flexDirection: "row",
    },

    containerPicker: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: Colors.GREEN

    },

    labelPicker: {
        fontSize: 12,
        color: Colors.BLACK
    },

    picker: {
        width: 130
    },

    pickerItem: {
        fontSize: 8
    }
});
