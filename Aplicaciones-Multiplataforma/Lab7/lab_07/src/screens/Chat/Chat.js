import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import { GiftedChat } from 'react-native-gifted-chat';

export default class HomeScreen extends React.Component{
    static = {
        messages: [],
        userId: null
    };

    async componentDidMount(){
        this.socket = global.socket;
        this.socket.on('message', this.onRecivedMessage);
        const userId = await AsyncStorage.getItem('userId');
    }
}