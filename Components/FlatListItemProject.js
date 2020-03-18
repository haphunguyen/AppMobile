import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, FlatList } from 'react-native'
import Button from 'react-native-button'
import Modal from 'react-native-modalbox'
import { connect } from 'react-redux'
import { addProjectToList, addMemberToProject } from '../Actions/index'
import ModalAddMemberToProject from './ModalAddMemberToProject'
import ModalAddProject from './ModalAddProject'


class FlatListItemProject extends Component {

    //Call action
    _AddProject(nameProject) {
        this.props.addProject(nameProject);
    }
    _AddMemberToProject(nameProject, listMember) {
        this.props.addMemberToProject(nameProject, listMember);
    }

    //Show Modalbox
    _ShowAddProject() {
        this.refs.AddProjectModal._showAddModal();
    }
    _ShowAddMemberToProjectModal(nameProject, listMember) {
        this.refs.AddMemberToProjectModal._showModal(nameProject, listMember);
    }


    render() {
        const dataFile = this.props.dataProject;
        return (
            <>
                <FlatList
                    data={dataFile}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListProject item={item} index={index} parentFlatList={this} />
                        );
                    }}
                    keyExtractor={(item) => item.nameProject}
                ></FlatList>

                <Button style={{ margin: 10 }} onPress={() => { this._ShowAddProject() }}>NEW PROJECT</Button>

                <ModalAddProject ref='AddProjectModal' parentModal={this} />
                <ModalAddMemberToProject ref='AddMemberToProjectModal' parentModal={this} />
            </>
        )
    }
}

class FlatListProject extends Component {
    render() {
        const { nameProject, listMember } = this.props.item;
        return (
            <>
                <View style={Styles.Container}>
                    <TouchableOpacity onPress={() => { this.props.parentFlatList._ShowAddMemberToProjectModal(nameProject, listMember) }}>
                        <Text >Name Project: <Text style={Styles.Text}>{nameProject} [{listMember.length}]</Text></Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        dataProject: state.addProject,
        dataMember: state.addMember
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addProject: (nameProject) => { dispatch(addProjectToList(nameProject)) },
        addMemberToProject: (nameProject, listMember) => { dispatch(addMemberToProject(nameProject, listMember)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatListItemProject)

let screen = Dimensions.get('window');

const Styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        padding: 18,
        borderWidth: 0.5,
        borderColor: 'grey',
        paddingLeft: 30
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 15
    },
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
    }, ViewButton: {
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
    }
})