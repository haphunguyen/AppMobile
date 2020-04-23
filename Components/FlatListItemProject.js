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
    _AddProject(nameProject,url) {
        const dataFile = this.props.dataProject;
        let index = dataFile.findIndex(item => item.nameProject == nameProject)
        let newUrl = url.length >0 ? url :  'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
        
        index > 0 ? alert('Please type diference nameProject') :
            this.props.addProject(nameProject,newUrl);
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
                <View style={{  backgroundColor: 'white', flexDirection: 'row' }}>
                    <View style={{  flex: 9,justifyContent: 'center', padding: 20, alignItems: 'center', }}>
                        <Text style={{fontSize: 20,}}>List Project</Text>
                    </View>
                    <TouchableOpacity style={{ justifyContent: 'center', flex: 1 }}
                    onPress={() => { this._ShowAddProject() }}>
                        <Text style={{ fontSize: 30, color: 'blue' }}>+</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={dataFile}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListProject item={item} index={index} parentFlatList={this} />
                        );
                    }}
                    keyExtractor={(item) => item.nameProject}
                ></FlatList>

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
        addProject: (nameProject,url) => { dispatch(addProjectToList(nameProject,url)) },
        addMemberToProject: (nameProject, listMember) => { dispatch(addMemberToProject(nameProject, listMember)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatListItemProject)

let screen = Dimensions.get('window');

const Styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        padding: 18,
        // borderWidth: 0.5,
        // borderColor: 'grey',
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
        borderColor: 'blue',
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 20,
        width: 150,
        height: 50
    }
})