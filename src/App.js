import React, { Component } from 'react';
import {
  AppRegistry,    // Registers the app
  StatusBar,      // Allows to hide the satatus bar
} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import SignInScreen from './components/signin';
import HomeScreen from './components/home';

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    SignIn: SignInScreen,
    App: AppStack
  },
  {
    initialRouteName: 'SignIn',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Lunch extends Component {
  componentDidMount() {
    // Hide the status bar
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <AppContainer />
    );
  }
}