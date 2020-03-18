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
        this.props.addMember(name, phone)
    }

    //ShowModal
    _ShowAddMember() {
        this.refs.AddMemberModal._showAddModal()
    }
    
    render() {
        const dataFile = this.props.dataMember
        return (
            <>
                <FlatList
                    data={dataFile}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListMember item={item} index={index} />
                        )
                    }}
                    keyExtractor={item => item}
                ></FlatList>
                <Button style={Styles.Button} onPress={() => { this._ShowAddMember() }}>NEW MEMBER</Button>
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
        borderWidth: 0.5,
        borderColor: 'grey'
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
