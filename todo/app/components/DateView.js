import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import moment from 'moment';
import styles from './styles/DateViewStyles';

export default class DateView extends Component {

  constructor(props) {
    super(props);
    this.day = moment().format('ddd');
    this.date = moment().format('D');
    this.month = moment().format('MMMM');
  };

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.day}>{this.day.toUpperCase()}</Text>
        <Text style={styles.date}>{this.date}</Text>
        <Text style={styles.month}>{this.month.toUpperCase()}</Text>
      </View>
    );
  };
};
