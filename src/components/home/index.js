import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import Button from '../common/Button';
import UserBar from '../common/UserBar';
import WeekList from './WeekList';

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

  getWeekDayName(day) {
    if (typeof day === 'undefined' || !day) {
      return '';
    }
    const names = [
      'Sunday', 'Monday', 'Tuesday',
      'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    return names[day];
  }

  getMonthName(month) {
    if (typeof month === 'undefined' || !month) {
      return '';
    }
    const names = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
    return names[month];
  }

  showNewCheckin() {
    // todo
  }

  render() {
    const date = new Date();
    const day = date.getDate();
    const weekDay = date.getDay();
    const month = date.getMonth();
    return (
      <View style={styles.layout} navigation={this.props.navigation}>
        <ScrollView>
          <View style={styles.heading}>
            <View style={styles.userImage}>
              <Image source={require('../../assets/images/user-logo.png')} />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.hello}>Hello,</Text>
              <Text style={styles.name}>Koombea</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                text="New Checkin"
                touchableStyle={styles.touchableStyle}
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
                onPress={() => this.showNewCheckin()}
              />
            </View>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>
              <Text style={styles.dateToday}>Today </Text>
              {this.getWeekDayName(weekDay)}, {this.getMonthName(month)} {day}
            </Text>
          </View>
          <View style={styles.dateContainer}>
            <WeekList />
          </View>
        </ScrollView>
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
  },
  dateContainer: {
    display: 'flex',
    flexBasis: '100%',
    flexDirection: 'row',
    marginTop: 29
  },
  date: {
    color: '#26666B',
    fontFamily: 'GTWalsheim-Regular',
    fontSize: 14,
    letterSpacing: -0.31,
    lineHeight: 23,
  },
  dateToday: {
    fontFamily: 'GTWalsheimBold',
  }
});