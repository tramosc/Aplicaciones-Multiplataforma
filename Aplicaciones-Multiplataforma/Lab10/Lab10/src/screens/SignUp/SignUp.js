import React from 'react';
import { View, Button, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignUpScreen extends React.Component{
    static navigationOptions = {
        title: 'Registrarse',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            return <Ionicons name="ios-clipboard" size={25} color={tintColor} />
        }
    };

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    render(){
        return (
            <View>
                <Button title="Inicie Sesión" onPress={this._signInAsync} />
            </View>
        );
    }
}