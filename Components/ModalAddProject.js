import React, { Component } from 'react'
import Modal from 'react-native-modalbox';
import { TextInput, View, StyleSheet, Dimensions } from 'react-native';
import Button from 'react-native-button';

export default class ModalAddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameProject: '',
            url: ''
        }
    }

    //Show and hide modalbox
    _showAddModal = () => {
        this.refs.AddProjectModal.open();
    }
    _closeModal = () => {
        this.refs.AddProjectModal.close();
    }
    render() {
        const { nameProject, url } = this.state
        return (
            <>
                <Modal
                    ref={'AddProjectModal'}
                    style={Styles.Modal}
                    position='center'
                    backdrop={true}
                >
                    <TextInput placeholder='Ex: GrabHotel' style={Styles.TextInput}
                        onChangeText={(n) => this.setState({ nameProject: n })} />
                    <TextInput placeholder='Ex: http://uri.png' style={Styles.TextInput}
                        onChangeText={(u) => this.setState({ url: u })} />
                    <View style={Styles.ViewButton}>
                        <Button style={Styles.Button} onPress={() => {
                            if (nameProject == '') {
                                alert('Pleasy type enough data!')
                                return;
                            } else {
                                this.props.parentModal._AddProject(nameProject,url)
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
    TextInput: {
        height: 40,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    ViewButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        borderColor: 'blue',
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 20,
        width: 150,
        height: 50
    }
})