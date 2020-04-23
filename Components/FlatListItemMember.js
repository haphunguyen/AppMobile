import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Button from 'react-native-button'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import Modal from 'react-native-modalbox'
import { connect } from 'react-redux'
import { addMemberToList } from '../Actions/index'

import ModalAddMember from './ModalAddMember'

class FlatListItemMember extends Component {

    //Call Action
    _AddMember(name, phone) {
        const dataFile = this.props.dataMember
        let index = dataFile.findIndex(item => item.name === name)
        index > 0 ? alert('Please type diference name!') :
            this.props.addMember(name, phone)
    }

    //ShowModal
    _ShowAddMember(name, phone) {
        this.refs.AddMemberModal._showAddModal(name, phone)
    }

    render() {
        const dataFile = this.props.dataMember
        return (
            <>
                <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
                    <View style={{ flex: 9, justifyContent: 'center', padding: 20, alignItems: 'center', }}>
                        <Text style={{ fontSize: 20, }}>List Member</Text>
                    </View>
                    <TouchableOpacity style={{ justifyContent: 'center', flex: 1 }}
                        onPress={() => { this._ShowAddMember() }}>
                        <Text style={{ fontSize: 30, color: 'blue' }}>+</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={dataFile}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => {}}>
                                <FlatListMember item={item} index={index} />
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.name}
                ></FlatList>
                <ModalAddMember ref={'AddMemberModal'} parentModal={this} />
            </>
        )
    }
}
class FlatListMember extends Component {
    render() {
        return (
            <>
                <View style={Styles.Container}>
                    <View>
                        <Text >Name: <Text style={Styles.Text}>{this.props.item.name}</Text></Text>
                        <Text >Phone: <Text style={Styles.Text}>{this.props.item.phone}</Text></Text>
                    </View>
                </View>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        dataMember: state.addMember
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMember: (name, phone) => { dispatch(addMemberToList(name, phone)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatListItemMember)

const Styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        paddingLeft: 30,
        padding: 8,
        // borderWidth: 0.5,
        // borderColor: 'grey'
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 15
    },
    TextInput: {
        height: 40,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    Button: {
        margin: 10
    }
})
