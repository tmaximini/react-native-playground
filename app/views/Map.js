
/**
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class MapScreen extends Component {

  render() {
    return (
     <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
     />
    );
  }
  
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
