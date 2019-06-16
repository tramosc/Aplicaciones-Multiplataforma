import React, { Fragment } from 'react';
import { Modal, View, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-ionicons';
import foto from '../../../assets/img/Foto_perfil.jpg';
//import console = require('console');
export default class ChatScreen extends React.Component {
	state = {
		messages: [],
		userId: null,
		modalVisible: false
	};
	async componentDidMount() {
		this.socket = global.socket;
		this.socket.on('message', this.onReceivedMessage);
		const userId = await AsyncStorage.getItem('userId');
		this.setState({ userId: userId });
	}
	onReceivedMessage = messages => {
		this._storageMessages(messages);
	};
	onSend = (messages = []) => {
		this.socket.emit('message', messages[0]);
		this._storageMessages(messages);
	};

	_storageMessages = messages => {
		this.setState(previousState => {
			return {
				messages: GiftedChat.append(previousState.messages, messages)
			};
		});
	};

	settingsHandler = () => {
		this.setState({ modalVisible: true });
	};
	chatHandler = () => {
		this.setState({ modalVisible: false });
	};
	cameraHandler = () => {
		this.setState({ modalVisible: false }, () => {
			console.log('si hace click');
			this.props.navigation.navigate('camera');
		});
	};

	backHandler = () => {
		this.setState({ modalVisible: false }, () => {
			this.props.navigation.navigate('Home');
		});
	};
	mapHandler = () => {
		this.setState({ modalVisible: false }, () => {
			this.props.navigation.navigate('Map');
		});
	};

	render() {
		const user = {
			_id: this.state.userId || -1,
			name: user,
			avatar: foto
		};

		return (
			<Fragment>
				<View style={{}}>
					<Modal
						animationType="slide"
						transparent={true}
						visible={this.state.modalVisible}
					>
						<View
							style={{
								flex: 1,
								backgroundColor: 'rgba(0, 0, 0, 0.5)',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<View>
								<Button
									onPress={this.chatHandler}
									title="Regresar al Chat"
									color="#841584"
								/>
								<Button
									onPress={this.cameraHandler}
									title="Tomar Foto"
									color="green"
								/>
								<Button
									onPress={this.mapHandler}
									title="Compartir ubicación"
									color="yellow"
								/>

								<Button
									onPress={this.backHandler}
									title="Regresar al Inicio"
									color="red"
								/>
							</View>
						</View>
					</Modal>
				</View>

				<GiftedChat
					placeholder="Escribe algo..."
					renderActions={() => {
						return (
							<Icon
								color="#fff"
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
					showUserAvatar={true}
					messages={this.state.messages}
					onSend={this.onSend}
					user={user}
				/>
			</Fragment>
		);
	}
}
