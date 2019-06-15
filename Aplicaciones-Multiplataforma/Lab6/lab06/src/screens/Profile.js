import React from "react";
import { View, Text, Button } from "react-native";

class ProfileScreen extends React.Component {
    render() {
        const userName = this.props.navigation.getParam('userName', 'Usuario');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Bienvenido {userName}</Text>
                <Button
                title="Volver al Home"
                onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

export default ProfileScreen;