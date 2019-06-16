import React, { Component } from 'react';
import {
	Platform,
	View,
	Text,
	PermissionsAndroid,
	StyleSheet,
	Dimensions
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { FloatingAction } from 'react-native-floating-action';
import Icon from 'react-native-ionicons';
//import console = require('console');

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const customStyle = [
	{
		elementType: 'geometry',
		stylers: [
			{
				color: '#242f3e'
			}
		]
	}
];

class MapStyle extends Component {
	state = {
		granted: false,
		data: null,
		latitude: null,
		longitude: null
	};
	componentDidMount() {
		this.requestGpsPermission();
	}
	requestGpsPermission = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					title: 'Permiso para geolocalizacion',
					message: 'Necesitamos tu permiso para mostrar tu posicion.',
					buttonNeutral: 'Preguntarme luego',
					buttonNegative: 'Cancelar',
					buttonPositive: 'Ok'
				}
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('You can use the geolocation');
				this.setState({ granted: true }, this.getPosition);
			} else {
				console.log('Geolocation permission denied');
				this.setState({ granted: false });
			}
		} catch (err) {
			console.warn(err);
		}
	};
	getPosition = () => {
		navigator.geolocation.getCurrentPosition(
			data => {
				console.log('data', data);
				this.setState({
					data: data,
					latitude: data.coords.latitude,
					longitude: data.coords.longitude
				});
			},
			error => {
				console.log('Error', error);

				alert('Hubo un error al obtener la geolocalizacion!');
			},
			{
				enableHighAccuracy: true,
				timeout: 50000,
				maximumAge: 1000
			}
		);
	};
	render() {
		const actions = [
			{
				text: 'Compartir ubicacion',
				name: 'bt_share',
				color: 'green',
				icon: (
					<Icon
						name={Platform.OS == 'ios' ? 'ios-share' : 'md-share'}
						color="#fff"
						size={25}
					/>
				),
				position: 1
			},
			{
				text: 'Regresar',
				name: 'bt_cancel',
				color: 'red',
				icon: (
					<Icon
						name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
						color="#fff"
						size={25}
					/>
				),
				position: 3
			}
		];

		return this.state.granted ? (
			this.state.data && (
				<View style={styles.container}>
					<MapView
						provider={'google'}
						style={styles.map}
						initialRegion={{
							latitude: this.state.latitude,
							longitude: this.state.longitude,
							latitudeDelta: LATITUDE_DELTA,
							longitudeDelta: LONGITUDE_DELTA
						}}
						customMapStyle={customStyle}
					>
						<Marker
							draggable
							coordinate={{
								latitude: this.state.latitude,
								longitude: this.state.longitude
							}}
							onDragEnd={e => {
								console.log(e.nativeEvent.coordinate);
								this.setState({
									latitude: e.nativeEvent.coordinate.latitude,
									longitude: e.nativeEvent.coordinate.longitude
								});
							}}
						/>
					</MapView>
					<FloatingAction
						position="left"
						color="red"
						actions={actions}
						onPressItem={name => {
							if (name === 'bt_share') {
								this.shareHandler();
							} else if (name === 'bt_cancel') {
								this.cancelHandler();
							}
						}}
					/>
				</View>
			)
		) : (
			<Text>No obtuvimos permiso :(</Text>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	map: {
		...StyleSheet.absoluteFillObject
	}
});

export default MapStyle;
