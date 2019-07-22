import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import WeekListItem from './WeekListItem';

export default class WeekList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({
      items: [
        {id: 1, hours: 8, dayName: 'Mon'},
        {id: 2, hours: 6, dayName: 'Tue'},
        {id: 3, hours: 8, dayName: 'Wed'},
        {id: 4, hours: 4, dayName: 'Thu'},
        {id: 5, hours: 2.5, dayName: 'Fri'},
        {id: 6, hours: 0, dayName: 'Sat'},
      ]
    });
  }

  keyExtractor(item, id) {
    return item.id;
  }

  renderItem({item}) {
    return (
      <View style={styles.listItem}>
        <WeekListItem item={item} />
      </View>
    );
  }

  checkDay = (item) => {
    // todo
  }

  render() {
    return (
      <View>
        <FlatList
          navigation={this.props.navigation}
          renderItem={this.renderItem}
          data={this.state.items}
          keyExtractor={this.keyExtractor}
          horizontal={false}
          numColumns={6}
          contentContainerStyle={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    alignItems: 'flex-start',
    display: 'flex',
    flexBasis: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItem: {
    flexBasis: '16.666%',
    paddingRight: 7,
  }
});