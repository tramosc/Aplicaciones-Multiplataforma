import React, { Fragment } from 'react';
import { Modal, View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-ionicons';
// import { GiftedChat } from 'react-native-gifted-chat';

export default class HomeScreen extends React.Component {
    state = {
        messages: [],
        userId: null,
        modalVisible: false
    };

    async componentDidMount(){
        this.socket = global.socket;
        this.socket.on('message', this.onReceivedMessage);
        const userId = await AsyncStorage.getItem('userId');
        this.setState({ userId: userId });
    }
    onRecivedMessage = messages => {
        this._storeMessages(messages);
    };
    onSend = (messages = []) => {
        this.socket.emit('message', messages[0]);
        this._storeMessages(messages);
    };
    _storeMessages = messages => {
        this.setState(previousState => {
            return {
                messages: GiftedChat.append(previousState.messages, messages)
            };
        });
    };
    settingsHandler = () => {
        this.setState({ modalVisible: true});
    };
    chatHandler = () => {
        this.setState({ modalVisible: false });
    }
    backHandler = () => {
        this.setState({ modalVisible: false }, () => {
            this.props.navigation.navigate('Home');
        });
    };
    render() {
        const user = { _id: this.state.userId || -1 };
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                user={user}
                />
        );
    }
    /*
    render(){
        const user = { _id: this.state.userId || -1 };
        return (
            <Fragment>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    >
                        <View>
                            <Button
                                onPress={this.chatHandler}
                                title="Regresar al chat"
                                color="#841584"
                                />
                            <Button
                                onPress={this.chatHandler}
                                title="Regresar al inicio"
                                color="red"
                            />  
                        </View>
                    </Modal>
            
        <GiftedChat
            placeholder="Escribe algo..."
            renderActions={() => {
                return (
                    <Icon
                        color='#fff'
                        style={{
                            padding: 5,
                            alignItems: 'center',
                            backgroundColor: '#46494f',
                            opacity: 0.8,
                            height: 40
                        }}
                        size={25}
                        name={'md-settings'}
                        onPress={this.settingsHandler}
                        />
                );
            }}
            messages={this.state.messages}
            onSend={this.onSend}
            user={user}
            />
            </Fragment>
        );
    }
*/
}

//3.2