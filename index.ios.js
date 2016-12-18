/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native';

import Login from './app/views/Login';


export default class playground extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Login,
          title: 'Sign in',
        }}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('playground', () => playground);
