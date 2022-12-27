import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

export default class DashBoardScreen extends Component {
    componentDidMount(){
        firebase.auth().signOut();
        this.props.navigation.replace('Login')
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>DashBoard Screen</Text>
            </View>
        )
    }
}

