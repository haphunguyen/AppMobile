import React, { Component } from 'react'
import Modal from 'react-native-modalbox';
import { TextInput, View, StyleSheet, Dimensions } from 'react-native';
import Button from 'react-native-button';

export default class ModalAddMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        }
    }

    //Show and hide modal
    _showAddModal = () => {
        this.refs.AddMemberModal.open()
    }
    _closeModal = () => {
        this.refs.AddMemberModal.close()
    }

    render() {
        return (
            <>
                <Modal
                    ref={'AddMemberModal'}
                    style={Styles.Modal}
                    position='center'
                    backdrop={true}
                >
                    <TextInput placeholder='Ex: Ha Phu Nguyen' style={Styles.TextInput}
                        onChangeText={(n) => this.setState({ name: n })} />
                    <TextInput placeholder='Ex: 0335566929' style={Styles.TextInput}
                        onChangeText={(p) => this.setState({ phone: p })} />


                    <View style={Styles.ViewButton}>
                        <Button style={Styles.Button} onPress={() => {
                            if (this.state.name == '' || (this.state.phone == '' || this.state.phone.length != 10)) {
                                alert('Pleasy type enough data!, Phone have Length = 10')
                                return;
                            } else {
                                this.props.parentModal._AddMember(this.state.name, this.state.phone)
                                this._closeModal()
                            }
                        }} >Save</Button>
                        <Button style={Styles.Button} onPress={() => { this._closeModal() }}>Close</Button>
                    </View>

                </Modal>
            </>
        )
    }
}
let screen = Dimensions.get('window');

const Styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        shadowRadius: 10,
        width: screen.width - 1000,
        height: screen.height
    },
    ViewButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        borderColor: 'skyblue',
        borderWidth: 2,
        padding: 10,
        margin: 5,
        borderRadius: 20,
        width: 150,
        height: 50
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
})