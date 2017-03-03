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
        style: styles.swipeyThing,
      },
    ];
    return (
      <View style={styles.container}>
        <Swipeout right={swipeoutButtons}>
            <View>
                <Text style={styles.swipeyThing}>Swipe me left</Text>
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  swipeyThing: {
    width: 300,
  }
});

AppRegistry.registerComponent('SwipeyButtons', () => SwipeyButtons);
