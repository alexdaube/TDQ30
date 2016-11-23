'use strict';

import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableHighlight, TextInput, Button, ListView} from "react-native";
import Space from "./Space";
import Separator from "./Separator";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import educationLevels from "../constants/EducationLevels";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    buttonText: {
        fontSize: 18,
        color: Colors.WHITE
    },
    button: {
        backgroundColor: Colors.POWDER_BLUE,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    searchInput: {
        padding: 5,
        fontSize: 18,
        color: "#111",
        flex: 3
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    rowName: {
        flex: 3,
        alignItems: 'flex-start',
        marginLeft: 5
    },
    rowEdit: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 5
    },
    rowErrorBadges: {
        flex: 4,
        flexDirection: 'row'
    },

    errorBadge: {
        marginRight: 10
    },

    emailContainer: {
        backgroundColor: "#E3E3E3",
        alignItems: "center",
        flexDirection: "row",
        height: 40
    },
    emailButtonContainer: {
        backgroundColor: Colors.POWDER_BLUE,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    resultSummaryContainer: {
        height: 40,
        flexDirection: "column"
    },
    resultContainer: {
        alignItems: 'flex-end',
        marginRight: 10
    },

    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.GREEN
    },

    averageResultText: {
        fontSize: 10,
        fontStyle: 'italic',
        textAlign: 'center',
        color: Colors.RED
    },

    averageResultContainer: {
        alignItems: 'flex-end',
        marginRight: 10
    },

    patientInfoContainer: {
        height: 20,
        flexDirection: 'row',
        alignSelf: 'center'
    },

    patientInfoText: {
        fontSize: 10,
        color: Colors.BLACK,
        marginRight: 5
    },

    patientInfoLabel: {
        fontWeight: 'bold'
    }

});

export default class ScoreCard extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        this.state = {
            dataSource: this.ds.cloneWithRows(this.props.cards),
            email: ''
        };
    }

    getResult() {
        let result = 0;
        this.props.cards.forEach((card) => {
            result += card.score;
        });
        return result;
    }

    handleChange(event) {
        this.setState({
            email: event.nativeEvent.text
        });
    }

    handleSubmit() {
    }

    _getErrorBadges(card) {
        let errorLabel = card.errorReported ? <Text>Erreur Notée: </Text> : <View/>;
        return (
            <View style={styles.rowErrorBadges}>
                {errorLabel}
                {this._getASingleErrorBadge(card.semantic, 'lightbulb-o', Colors.SEMANTIC)}
                {this._getASingleErrorBadge(card.phonological, 'hard-of-hearing', Colors.PHONOLOGICAL)}
                {this._getASingleErrorBadge(card.visual, 'eye', Colors.VISUAL)}

            </View>
        );
    }

    _getASingleErrorBadge(isPresent, iconName, color) {
        return isPresent ? <View style={styles.errorBadge}><Icon name={iconName} color={color} size={18}/></View> :
            <View/>;
    }

    renderRow(card) {
        let resultIcon = card.score > 0 ? ['check', Colors.GREEN] : ['remove', Colors.RED];
        let result = <Icon name={resultIcon[0]} color={resultIcon[1]} size={18}/>;
        return (
            <View>
                <View style={styles.rowContainer}>
                    <View style={styles.rowName}>
                        <Text>{result} {card.position.toString()}. {card.name} </Text>
                    </View>

                    {this._getErrorBadges(card)}

                    <View style={styles.rowEdit}>
                        <Icon name='edit' color={Colors.BLACK} size={18}/>
                    </View>

                </View>
                <Separator />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}/>

                <Space length={10}/>
                <View style={styles.patientInfoContainer}>
                    <Text style={styles.patientInfoText}><Text style={styles.patientInfoLabel}># patient:</Text> {this.props.dossier}</Text>
                    <Text style={styles.patientInfoText}><Text style={styles.patientInfoLabel}>Née:</Text> {this.props.dateOfBirth}</Text>
                    <Text style={styles.patientInfoText}>
                        <Text style={styles.patientInfoLabel}>Éducation:</Text> {educationLevels.find((el) => el.level == this.props.educationLevel).name.toLowerCase()}
                    </Text>
                </View>

                <View style={styles.resultSummaryContainer}>
                    <View style={styles.averageResultContainer}>
                        <Text style={styles.averageResultText}>Résultat Minimum Attendu: 20/30</Text>
                    </View>
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultText}>Résultat: {this.getResult().toString()}/30</Text>
                    </View>
                </View>

                <View style={styles.emailContainer}>

                    <TextInput
                        style={styles.searchInput}
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        placeholder="Email"/>
                    <View style={styles.emailButtonContainer}>
                        <Button
                            color={Colors.WHITE}
                            onPress={this.handleSubmit.bind(this)}
                            title="Envoyer"
                            accessibilityLabel="Envoyer le résultat par émail"/>
                    </View>
                </View>
            </View>
        );
    }
}


//<Text># patient: {this.props.dossier} née: {this.props.dateOfBirth} éducation: {educationLevels.find((el) => el.level == this.props.educationLevel).name.toLowerCase()}</Text>