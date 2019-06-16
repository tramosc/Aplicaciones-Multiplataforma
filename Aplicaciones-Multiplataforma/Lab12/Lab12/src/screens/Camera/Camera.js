import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-community/async-storage';

import axios from '../../lib/axios';
//import console = require('console');

const PendingView = () => (
	<View
		style={{
			flex: 1,
			backgroundColor: 'lightgreen',
			justifyContent: 'center',
			alignItems: 'center'
		}}
	>
		<Text>waiting</Text>
	</View>
);

class CameraScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<RNCamera
					style={styles.preview}
					type={RNCamera.Constants.Type.back}
					flashMode={RNCamera.Constants.FlashMode.on}
					androidCameraPermissionOptions={{
						title: 'Permission to use camera',
						message: 'we need your permission to use your camera',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel'
					}}
					androidRecordAudioPermissionOptions={{
						title: 'Permission to use audio recording',
						message: 'We need your permission to use your audio',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel'
					}}
				>
					{({ camera, status, recordAudioPermissionStatus }) => {
						if (status !== 'READY') return <PendingView />;
						return (
							<View
								style={{
									flex: 0,
									flexDirection: 'row',
									justifyContent: 'center'
								}}
							>
								<TouchableOpacity
									onPress={() => this.takePicture(camera)}
									style={styles.capture}
								>
									<Text style={{ fontSize: 14 }}>SNAP</Text>
								</TouchableOpacity>
							</View>
						);
					}}
				</RNCamera>
			</View>
		);
	}

	takePicture = async function(camera) {
		const options = { quality: 0.5, base64: true };
		const token = await AsyncStorage.getItem('userToken');
		const data = await camera.takePictureAsync(options);
		console.log(data.uri);

		const formData = new FormData();
		formData.append('file', {
			uri: data.uri,
			name: 'my_photo.jpg',
			type: 'image/jpg'
		});
		axios({
			url: 'api/file/upload',
			method: 'POST',
			headers: {
				Authorization: token
			},
			data: formData
		})
			.then(response => {
				alert('Guardado con exito!');
			})
			.catch(erro => {
				alert('Hubo un error en el guardado');
			});
	};
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'black'
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	capture: {
		flex: 0,
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 15,
		paddingHorizontal: 20,
		alignSelf: 'center',
		margin: 20
	}
});

export default CameraScreen;
