import React, { Component } from 'react';
import { View, Text, Image, Alert } from 'react-native';;
import SettingsList from 'react-native-settings-list';

class Settings extends Component {
	state = {
		switchValue: false
	};
	onValueChange = value => {
		this.setState({ switchValue: value });
	};
	render() {
		return (
			<View style={{ backgroundColor: '#EFEFF4', flex: 1 }}>
				<View
					style={{
						borderBottomWidth: 1,
						backgroundColor: '#f7f7f8',
						borderColor: '#c8c7cc'
					}}
					>
						<Text
							style={{
								alignSelf: 'center',
								marginTop: 30,
								marginBottom: 10,
								fontWeight: 'bold',
								fontSize: 16
							}}
							>
								Configuracion
						</Text>
					</View>
					<View style={{ flex: 1, marginTop: 50 }}>
						<SettingsList>
							<SettingsList.Header
								headerText="Primer grupo"
								headerStyle={{ color: '#666'}}
							/>
							<SettingsList.Item
								icon={
									<View
										style={{ height: 30, marginLeft: 10, alignSelf: 'center' }}
									>
										<Image
											style={{ alignSelf: 'center', height: 40, width: 40 }}
											source={require('../../../assets/img/icon-profile.png')}
										/>
									</View>
									}
									itemWidth={50}
									title="Icono de ejemplo"
									onPress={() => Alert.alert('Icono de ejemplo presionado')}
									/>
									<SettingsList.Item
										hasNavArrow={false}
										switchState={this.state.switchValue}
										switchOnValueChange={this.onValueChange}
										hasSwitch={true}
										title="Ejemplo de switch"
										/>
									<SettingsList.Item
										title="Ejemplo de switch"
										backgroundColor="#D1D1D1"
										titleStyle={{ color: 'blue' }}
										arrowStyle={{ tintColor: 'blue' }}
										onPress={() => Alert.alert('Ejemplo de color presionado')}
										/>
									<SettingsList.Header
										headerText="Otro Grupo"
										headerStyle={{ color: '#666', marginTop: 50 }}
									/>
									<SettingsList.Item
										titleInfo="Algun dato"
										hasNavArrow={false}
										title="Dato de ejemplo"
									/>
									<SettingsList.Item title="Settings 1" />
									<SettingsList.Item title="Settings 2" />
						</SettingsList>
					</View>
			</View>
		);
	}
}

export default Settings;