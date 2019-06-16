import React from 'react';
import { ActivityIndicator, StatusBar, View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class AuthLoadingScreen extends React.Component {
	componentDidMount(){
		this._bootstrapAsync();
	}
	_bootstrapAsync = async() => {
		const userToken = await AsyncStorage.getItem('userToken');
		this.props.navigation.navigate(userToken ? 'App' : 'Auth');
	};
	render(){
		return ( 
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'stretch'
				}}
			>
				<ActivityIndicator />
				<StatusBar barStyle="default"/>
				<Text
					style={{
						textAlign: 'center',
						fontWeight: 'bold'
					}}
				>
					Cargando...
				</Text>
			</View>
		);
	}
}