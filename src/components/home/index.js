import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from '../common/Button';
import UserBar from '../common/UserBar';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkins: [],
      loading: false,
      user: {},
      showError: false
    };
  }

  showNewCheckin() {
    // todo
  }

  render() {
    return (
      <View style={styles.layout} navigation={this.props.navigation}>
        <View style={styles.heading}>
          <View style={styles.userImage}>
            <Image source={require('../../assets/images/user-logo.png')} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.hello}>Hello,</Text>
            <Text style={styles.name}>Koombea</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button text="New Checkin" touchableStyle={styles.touchableStyle} buttonStyle={styles.button} textStyle={styles.buttonText} onPress={() => this.showNewCheckin()} />
          </View>
        </View>
        <UserBar navigation={this.props.navigation} screenNumber="1" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    fontFamily: 'GTWalsheim-Regular',
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 70,
    position: 'relative',
    width: '100%',
  },
  heading: {
    display: 'flex',
    flexBasis: '100%',
    flexDirection: 'row'
  },
  userImage: {
    flexBasis: '10%',
    paddingTop: 11,
  },
  nameContainer: {
    flexBasis: '50%',
  },
  hello: {
    color: '#26666B',
    fontFamily: 'GTWalsheim-Regular',
    fontSize: 24,
    letterSpacing: -0.53,
    lineHeight: 23,
  },
  name: {
    color: '#26666B',
    fontFamily: 'GTWalsheimBold',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.53,
    lineHeight: 23,
    paddingTop: 5,
  },
  buttonContainer: {
    flexBasis: '40%',
  },
  touchableStyle: {
    backgroundColor: '#0BD8A2',
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'GTWalsheimBold',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.09,
    lineHeight: 20,
    textAlign: 'center',
  }
});