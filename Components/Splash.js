import React, { Component } from 'react'
import { View, StyleSheet, Text,ActivityIndicator } from 'react-native'

export default class Splash extends Component {
    render() {
        return (
            <>
                <View style={styles.Container}>
                    <Text style={styles.Title}>Wellcome to Project</Text>
                    <ActivityIndicator/>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'darkslategrey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white'
    }
})