import React from 'react';
import { View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Bienvenido a la App!',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            return <Ionicons name="ios-clipboard" size={25} color={tintColor} />
        }
    };

    _showMoreApp = async () => {
        this.props.navigation.navigate('Chat');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    render(){
        return (
            <View>
                <Button title="Muestrame el Chat" onPress={this._showMoreApp} />
                <Button title="Mejor, Cierra sesión" onPress={this._signOutAsync} />
            </View>
        );
    }
}