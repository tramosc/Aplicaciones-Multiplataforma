import React from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Hola Mundo!</Text>
                <Button
                title="Go to details"
                onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default HomeScreen;

