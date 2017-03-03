import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import SwipeyButtons from './swipeyButtons.js';

export default class Swipey extends Component {
  render() {
    return (
      <SwipeyButtons />
    );
  }
}

AppRegistry.registerComponent('Swipey', () => Swipey);
