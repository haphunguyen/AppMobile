import React, { Component } from 'react'
import Modal from 'react-native-modalbox';
import { View, StyleSheet, Dimensions, FlatList, TouchableOpacity, Text } from 'react-native';
import Button from 'react-native-button';

export default class ModalAddMemberToProject extends Component {
    constructor(props) {
        super(props);
        this.state={
            arrayMember:[],
            nameProject:''
        }
    }
    

    //Show and hide Modalbox
    _showModal = (nameProject, arrayMember) => {
        this.refs.AddMemberToProjectModal.open()
        this.setState({
            arrayMember: arrayMember,
            nameProject: nameProject
        })
    }
    _closeModal = () => {
        this.refs.AddMemberToProjectModal.close()
    }

    //Call Action
    _AddMemberToProject = () => {
        this.props.parentModal._AddMemberToProject(this.state.nameProject, this.state.arrayMember)
    }

    render() {
        const dataMember = this.props.parentModal.props.dataMember
        return (
            <>
                <Modal
                    ref={'AddMemberToProjectModal'}
                    style={Styles.Modal}
                    position='center'
                    backdrop={true}
                >
                    <View style={Styles.Container}>
                        <View style={{ justifyContent: 'center', padding: 20, alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>Choose Member</Text>
                        </View>
                        <FlatList
                            data={dataMember}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={Styles.ViewModal}>
                                        <TouchableOpacity onPress={() => {
                                            const dataMember = this.state.arrayMember
                                            const index = dataMember.findIndex(member => item.name == member)

                                            if (index == -1) {
                                                return this.setState({
                                                    arrayMember: [...this.state.arrayMember, item.name],
                                                    nameProject: this.state.nameProject
                                                })
                                            } else {
                                                dataMember.splice(index, 1)
                                                return this.setState({
                                                    arrayMember: dataMember,
                                                    nameProject: this.state.nameProject
                                                })
                                            }
                                        }
                                        }>
                                            <Text style={{
                                                fontSize: 20,
                                                color: this.state.arrayMember.find(mem => mem == item.name) ? 'green' : 'red',
                                            }}>{this.state.arrayMember.find(mem => mem == item.name) ? '>  ' : 'X  '} {item.name}</Text>
                                        </TouchableOpacity>

                                    </View>
                                )
                            }}
                            keyExtractor={(item) => item.name}
                        >
                        </FlatList>
                    </View>
                    <View style={Styles.ViewButton}>
                        <Button style={Styles.Button} onPress={() => {
                            this._AddMemberToProject();
                            this._closeModal();
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
    Container: {
        flex: 1,
    },
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
        borderColor: 'blue',
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 20,
        width: 150,
        height: 50
    },
    ViewModal: {
        flexDirection: 'row',
        padding: 10,
        // borderWidth: 0.5
    },
    Title: {
        fontSize: 25,
        marginLeft: screen.width / 5
    }
})