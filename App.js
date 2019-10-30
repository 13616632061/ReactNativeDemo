/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorTwo from './view/TabNavigator/TabNavigatorTwo';
export default class App extends Component {
  render() {
    return <TabNavigatorTwo />;
  }
}
