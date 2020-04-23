import { View, Text, FlatList, Image } from 'react-native'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component {

    render() {
        let data = this.props.dataProject
        let number = 3 - data.length % 3
        let newData = JSON.parse(JSON.stringify(data))
        for (let index = 0; index < number; index++) {
            newData.push({})
        }

        
        return (
            <View>

                <ScrollView>
                    <View style={{ justifyContent: 'center', padding: 20, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }}>Table project</Text>
                    </View>
                    <FlatList data={newData}
                        numColumns={3}
                        renderItem={({ item, index }) => Object.keys(item).length > 0 ? (
                            <View style={{ flex: 1, height: 120, justifyContent: 'space-around', alignItems: 'center', borderWidth: 1, margin: 10, borderRadius: 20, borderColor: 'blue' }}>
                                <Image source={{ uri: item.img }}
                                    style={{ width: 40, height: 40, borderRadius: 90 }} />
                                <Text style={{ fontStyle: 'italic', fontSize: 15, color: 'red' }}>{item.nameProject}</Text>
                                <Text>Member: <Text style={{ color: 'red' }}>{item.listMember.length}</Text></Text>
                            </View>
                        ) : (<View style={{ flex: 1 }}></View>)}
                    ></FlatList>
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        dataProject: state.addProject,
        dataMember: state.addMember
    };
}
export default connect(mapStateToProps, null)(Home)