import React, { Component } from 'react';
import {
  AppRegistry,    // Registers the app
  StatusBar,      // Allows to hide the satatus bar
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignInScreen from './components/signin';

const AppNavigator = createStackNavigator(
  {
    SignIn: SignInScreen,
  },
  {
    initialRouteName: "SignIn",
    defaultNavigationOptions: {
      header: null
    }
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