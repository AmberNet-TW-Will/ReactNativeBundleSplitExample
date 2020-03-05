import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class LoginContainer extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <Text>{'Hello World!'}</Text>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    }
})

export default LoginContainer;