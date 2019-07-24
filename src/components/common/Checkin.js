import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Checkin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  repeatCheckin() {
    // todo
  }

  render() {
    let item = this.props.item;
    if (!item) {
      return;
    }
    let boxStyles = [styles.layout];
    let percentage = (item.hours * 100) / 8;
    let barColor = '#0BD8A2';
    if (percentage == 0) {
      barColor = '#FFFFFF';
    } else if (percentage <= 40) {
      barColor = '#FF5D5D';
    } else if (percentage < 100) {
      barColor = '#FFCA65';
    }
    let barStyle = {
      backgroundColor: barColor,
      top: (100 - percentage) + '%'
    };

    return (
      <View style={boxStyles}>
        <View style={styles.bar}>
          <View style={[styles.variableBar, barStyle]}></View>
        </View>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <View style={styles.checkinTitleContainer}>
              <Text style={styles.checkinTitle}>{item.title}</Text>
            </View>
            <View style={styles.checkinDateContainer}>
              <Text style={styles.checkinMonthName}>{item.monthName}</Text>
              <View>
                <Text style={styles.checkinDayNumber}>{item.day}</Text>
              </View>
            </View>
          </View>
          <View style={styles.messageContainer}>
            <View style={styles.messageHours}>
              <Text style={styles.hoursText}>{item.hours}</Text>
            </View>
            <View style={styles.messageText}>
              <Text style={styles.messageContent}>{item.message}</Text>
              <View>
                <Text style={styles.projectName}>{item.projectName}</Text>
              </View>
            </View>
            <View style={styles.messageRepeat}>
              <TouchableOpacity onPress={this.repeatCheckin} style={styles.repeatStyle}>
                <Image style={styles.image} source={require('../../assets/images/repeat.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    alignItems: 'flex-start',
    borderRadius: 12,
    display: 'flex',
    elevation: 1,
    flex: 1,
    flexBasis: '100%',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bar: {
    borderColor: '#ffffff',
    borderWidth: 1,
    flexBasis: '1.75%',
    height: '100%',
    padding: 1,
    position: 'relative'
  },
  content: {
    flexBasis: '98.25%'
  },
  variableBar: {
    bottom: 0,
    left: 0,
    paddingBottom: 1,
    paddingLeft: 1,
    position: 'absolute',
    right: 0,
  },
  titleContainer: {
    backgroundColor: '#F0FCF8',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 11,
    paddingBottom: 4
  },
  checkinTitleContainer: {
    flexBasis: '94%'
  },
  checkinTitle: {
    color: '#26666B',
    fontFamily: 'GTWalsheimBold',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.09,
    lineHeight: 20,
  },
  checkinMonthName: {
    color: '#9FB3B4',
    fontFamily: 'GTWalsheim-Regular',
    fontSize: 9,
    letterSpacing: -0.06,
    marginTop: -3,
  },
  checkinDayNumber: {
    color: '#26666B',
    fontFamily: 'GTWalsheimBold',
    fontSize: 16,
    letterSpacing: -0.1,
  },
  checkinDateContainer: {
    flexBasis: '6%'
  },
  messageContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 11
  },
  messageHours: {
    flexBasis: '15%',
  },
  messageText: {
    flexBasis: '75%',
  },
  messageRepeat: {
    flexBasis: '10%',
  },
  hoursText: {
    color: '#26666B',
    fontFamily: 'GTWalsheimBold',
    fontSize: 24,
    letterSpacing: -0.15,
  },
  messageContent: {
    color: '#9FB3B4',
    fontFamily: 'GTWalsheim-Regular',
    fontSize: 15,
    letterSpacing: -0.09,
  },
  projectName: {
    color: '#26666B',
    fontFamily: 'GTWalsheim-Medium',
    fontSize: 13,
    letterSpacing: -0.08,
    marginTop: 11,
  },
  repeatStyle: {
    backgroundColor: '#0BD8A2',
    borderRadius: 6,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 8,
    paddingTop: 8,
    textAlign: 'center'
  }
});