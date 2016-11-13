import React, {Component} from "react";
import {StyleSheet, View, TouchableHighlight, Text, Picker, ScrollView, Button} from "react-native";
import DenominationTest from './DenominationTest';
import Colors from "../constants/Colors";
import Shapes from "../constants/Shapes";

const Item = Picker.Item;

let generateYears = function () {
    let year = new Date().getFullYear();
    let years = [];
    for (let i = 0; i < 100; i++) {
        years.push(year);
        year -= 1;
    }
    return years;
};

let educationLevels = [
    {
        name: "None",
        level: 0
    },
    {
        name: "Pre-School",
        level: 1
    },
    {
        name: "Elementary School",
        level: 2
    },
    {
        name: "High School",
        level: 3
    },
    {
        name: "College",
        level: 4
    },
    {
        name: "Technique",
        level: 5
    },
    {
        name: "University Bachelor",
        level: 6
    },
    {
        name: "University Master",
        level: 7
    },
    {
        name: "University Doctorate",
        level: 8
    },
    {
        name: "University Post-Doctorate",
        level: 9
    }
];

export default class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateOfBirth: 1980,
            educationLevel: 3
        };
    }

    launchTest() {
        this.props.navigator.push({
            title: "Test",
            component: DenominationTest,
            passProps: {results: ["Result1", "Result2", "Result3", "Result4", "Result1", "Result2", "Result3", "Result4", "Result1", "Result2", "Result3", "Result4"]}
        });
    }

    generateDatesOfBirth() {
        return generateYears().map((item, index) => {
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


    render() {
        return (
            <View style={styles.container}>


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
                    <Button color={Colors.GREEN}
                            onPress={this.launchTest.bind(this)}
                            title="Lancer le test"
                            accessibilityLabel="Lancer le test"/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: '#48BBEC'
    },

    pickersContainer: {
        paddingTop: 35,
        flex:4,
        flexDirection: "row",
    },

    containerPicker: {
        flex:1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    },

    labelPicker: {
        fontSize: 12,
        color: Colors.WHITE
    },

    picker: {
        width: 130
    },

    pickerItem: {
        fontSize: 10
    }
});
