/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Text, View, Button} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';
import ProfileScreen from './src/screens/Profile';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    path: 'home/',
    navigationOption:{
      title: 'Esta es la Home'
    }
  },
  Details: DetailsScreen,
  Profile: ProfileScreen,
},
{
  initialRouteName: "Home",
  defaultNavigationOptions:{
    title: 'Un titulo generico',
    headerStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(AppNavigator);






/*
class HomeScreen extends React.Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hola Mundo!</Text>
        <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
            />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render(){
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Details Screen </Text>
        <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
            />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    path: 'home/',
    navigationOption:{
      title: 'Esta es la Home'
    }
  },
  Details: DetailsScreen
},
{
  initialRouteName: "Home"
});

export default createAppContainer(AppNavigator);

*/