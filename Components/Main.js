import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { Provider } from 'react-redux';
import { Store } from '../Stores'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FlatListItemProject from './FlatListItemProject'
import FlatListItemMember from './FlatListItemMember'

const Tab = createBottomTabNavigator()

export default class Main extends Component {
    render() {
        return (
            <>
                <Provider store={Store}>
                    <View style={Styles.Container}>
                        <NavigationContainer>
                            <Tab.Navigator>
                                <Tab.Screen name="Member" component={FlatListItemMember} />
                                <Tab.Screen name="Project" component={FlatListItemProject} />
                            </Tab.Navigator>
                        </NavigationContainer>
                    </View>
                </Provider>
            </>
        );
    }
}

const Styles = StyleSheet.create({
    Container: {
        flex: 1
    }
})