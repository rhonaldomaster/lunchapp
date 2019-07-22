import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from '../common/Button';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false,
      password: '',
      showError: false
    };
  }

  render() {
    return (
      <View style={styles.layout} navigation={this.props.navigation}>
        <Image style={styles.image} source={require('../../assets/images/sign-in-app-logo.png')} />
        <Text style={styles.title}>Sign in with your <Text style={styles.highlightedd}>Koombea</Text> account</Text>
        <View style={styles.signInBox}>
          <Text style={styles.loginTitle}>Login</Text>
          <Button text="Sign in"
            touchableStyle={styles.touchableStyle}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={() => this.signIn()}
          />
        </View>
      </View>
    );
  }
  
  signIn() {
    // todo
    this.props.navigation.navigate('Home');
  }
}

const styles = StyleSheet.create({
  layout: {
    alignItems: 'flex-start',
    backgroundColor: '#00343D',
    fontFamily: 'GTWalsheim-Regular',
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingTop: 78,
    position: 'relative',
    width: '100%',
  },
  image: {
    alignSelf: 'flex-start'
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'GTWalsheimBold',
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: -0.89,
    lineHeight: 38,
    marginTop: 36,
    paddingRight: 15,
    paddingTop: 5,
  },
  highlightedd: {
    color: '#0BD8A2',
    textDecorationLine: 'underline',
  },
  signInBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 0,
    marginTop: 123,
    paddingBottom: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 23,
    textAlign: 'center',
    width: '100%'
  },
  loginTitle: {
    color: '#00343D',
    fontFamily: 'GTWalsheimBold',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: -0.48,
    lineHeight: 28,
    marginBottom: 18,
    textAlign: 'center',
  },
  touchableStyle: {
    backgroundColor: '#0BD8A2',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'GTWalsheimBold',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    lineHeight: 23,
    textAlign: 'center',
  }
});