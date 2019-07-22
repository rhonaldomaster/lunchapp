import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
export default class UserBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: this.props.screenNumber
        ? this.props.screenNumber
        : 1
    };
  }

  render() {
    const homeImage = this.state.currentScreen == 1
      ? require('../../assets/images/home.png')
      : require('../../assets/images/home-inactive.png');
    const settingsImage = this.state.currentScreen == 2
      ? require('../../assets/images/settings.png')
      : require('../../assets/images/settings-inactive.png');
    const eventImage = this.state.currentScreen == 3
      ? require('../../assets/images/event.png')
      : require('../../assets/images/event-inactive.png');
    return (
      <View style={styles.layout} navigation={this.props.navigation}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.containerItem}>
            <Image source={homeImage} />
            <Text style={this.state.currentScreen == 1 ? styles.active : styles.inactive}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerItem}>
            <Image source={settingsImage} />
            <Text style={this.state.currentScreen == 2 ? styles.active : styles.inactive}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerItem}>
            <Image source={eventImage} />
            <Text style={this.state.currentScreen == 3 ? styles.active : styles.inactive}>Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#26666B',
    bottom: 0,
    color: '#FFFFFF',
    left: 0,
    paddingBottom: 34,
    position: 'absolute',
    right: 0,
  },
  container: {
    display: 'flex',
    flexBasis: '100%',
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingTop: 12,
  },
  containerItem: {
    flexBasis: '33.333%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  active: {
    color: '#FFFFFF',
    fontFamily: 'GTWalsheim-Medium',
    fontSize: 11,
    lineHeight: 13,
    marginTop: 6,
  },
  inactive: {
    color: '#7CA3A6',
    fontFamily: 'GTWalsheim-Regular',
    fontSize: 11,
    lineHeight: 13,
    marginTop: 6,
  }
});