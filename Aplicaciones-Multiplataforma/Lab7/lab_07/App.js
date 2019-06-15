import {
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';

import AuthLoadingScreen from './src/screens/AuthLoadingScreen/AuthLoadingScreen';
import SignInScreen from './src/screens/SignIn/SignIn';
import SignUpScreen from './src/screens/SignUp/SignUp';
import HomeScreen from './src/screens/Home/Home';
import ChatScreen from './src/screens/Chat/Chat';

const AppStack = createDrawerNavigator({
  Home: HomeScreen, Other: ChatScreen
});
const AuthStack = createBottomTabNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
