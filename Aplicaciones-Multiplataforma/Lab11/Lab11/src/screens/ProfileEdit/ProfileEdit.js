import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import { styles } from '../../styles/global';

class ProfileEdit extends Component {
    state = {
        userId: null,
        userName: '',
        userEmail: '',
        picture: ''
    };
    static navigationOptions = {
        drawerLabel: () => null
    };
    componentDidMount = async () => {
        const userName = await AsyncStorage.getItem('userName');
        const userEmail = await AsyncStorage.getItem('userEmail');
        this.setState({
            userName: userName,
            userEmail: userEmail,
        });
    };
    inputHandler = (text, field) => {
        this.setState({ [field]: text });
    };
    render() {
        return (
            <ScrollView style={formStyles.container}>
                <Text style={styles.subtitle}>Editar perfil</Text>
                <Input
                    placeholder="Nombre de usuario"
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    inputContainerStyle={formStyles.input}
                    value={this.State.userName}
                    onChangeText={text => this.inputHandler(text, 'userName')}
                    />
                <Input
                    placeholder="Correo Electronico"
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    inputContainerStyle={formStyles.input}
                    value={this.State.userEmail}
                    onChangeText={text => this.inputHandler(text, 'userEmail')}
                    />
                    <Button title="Guardar Perfil" containerStyle={formStyles.button} />
            </ScrollView>
        );
    }
}

const formStyles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
        marginTop: 10
    },
    button: {
        marginTop: 10
    }
});

export default ProfileEdit;