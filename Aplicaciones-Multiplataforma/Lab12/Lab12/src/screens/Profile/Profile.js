import React, { Component } from 'react';
import { ScrollView, Image, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { styles } from '../../styles/global';
import getAvatar from '../../lib/avatar';
import IconBox from '../../components/UI/IconBox';
import Badge from '../../components/UI/Badge';
import loadingGif from '../../../assets/img/loading.gif';

class Profile extends Component {
	state = {
		avatar: '',
		userName: '',
		userEmail: ''
	};
	componentDidMount = async () => {
		const userName = await AsyncStorage.getItem('userName');
		const userEmail = await AsyncStorage.getItem('userEmail');
		this.setState({
			userName: userName,
			userEmail: userEmail,
			avatar: getAvatar(userEmail)
		});
	};
	editProfileHandler = () => {
		this.props.navigation.navigate('ProfileEdit');
	};
	render() {
		return (
			<ScrollView>
				{this.state.avatar !== '' ? (
					<Badge
						userName={this.state.userName}
						email={this.state.userEmail}
						avatar={this.state.avatar}
					/>
				) : (
					<Image source={loadingGif} />
				)}
				<View style={styles.iconContainer}>
					<IconBox
						value={'Editar'}
						label={'Modificar perfil'}
						icon={require('../../../assets/img/icon-edit.png')}
						onPress={this.editProfileHandler}
					/>
				</View>
			</ScrollView>
		);
	}
}

export default Profile;
