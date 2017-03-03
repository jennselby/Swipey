/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swipeout from 'react-native-swipe-out'

export default class SwipeyButtons extends Component {
  render() {
    // use really basic example from https://www.npmjs.com/package/react-native-swipe-out
    var swipeoutButtons = [
      {
        text: 'Button',
      },
    ];
    return (
      <View style={styles.container}>
        <Swipeout right={swipeoutButtons}>
            <View>
                <Text>Swipe me left</Text>
            </View>
        </Swipeout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
});

AppRegistry.registerComponent('SwipeyButtons', () => SwipeyButtons);
