import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class WeekListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }

  checkDay(item) {
    // to do
  }

  render() {
    let item = this.props.item;
    let containerStyles = [styles.container];
    let percentage = (item.hours * 100) / 8;
    let bgs = [styles.bg];
    const height = 84;
    let textStyle = styles.darkText;
    if (percentage > 0) {
      const top = percentage / 100;
      bgs.push({
        paddingTop: height * top
      });

      if (percentage <= 40) {
        textStyle = styles.dangerText;
        bgs.push({
          backgroundColor: '#FF5D5D'
        });
      } else if (percentage < 100) {
        textStyle = styles.warnText;
        bgs.push({
          backgroundColor: '#FFCA65'
        });
      } else {
        textStyle = styles.whiteText;
        bgs.push({
          backgroundColor: '#0BD8A2',
          borderTopLeftRadius: 11,
          borderTopRightRadius: 11,
        });
      }
    }

    return (
      <TouchableOpacity style={containerStyles} onPress={() => this.checkDay(item)}>
        <View style={bgs}></View>
        <View style={styles.content}>
          <Text style={[styles.centered, textStyle, styles.dayName]}>{item.dayName}</Text>
          <Text style={[styles.centered, textStyle, styles.hours]}>{item.hours}</Text>
          <Text style={[styles.centered, textStyle, styles.hoursName]}>Hours</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    zIndex: 0
  },
  container: {
    backgroundColor: '#EBF6F3',
    borderColor: 'rgba(159, 179, 180, 0.7)',
    borderRadius: 12,
    borderWidth: 1,
    paddingBottom: 17,
    paddingLeft: 2.5,
    paddingRight: 3.5,
    paddingTop: 14,
    position: 'relative'
  },
  content: {
    position: 'relative',
    zIndex: 1
  },
  centered: {
    textAlign: 'center'
  },
  darkText: {
    color: '#9FB3B4'
  },
  whiteText: {
    color: '#FFFFFF'
  },
  warnText: {
    color: '#DD913C'
  },
  dangerText: {
    color: '#CF3232'
  },
  dayName: {
    fontFamily: 'GTWalsheim-Regular',
    fontSize: 11,
    letterSpacing: -0.24,
  },
  hours: {
    fontFamily: 'GTWalsheimBold',
    fontSize: 24,
    letterSpacing: -0.15,
  },
  hoursName: {
    fontFamily: 'GTWalsheimBold',
    fontSize: 10,
    letterSpacing: -0.22,
    marginTop: -10
  }
});