import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import Application from './src';
import React, { Component } from 'react';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <Application />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  }
});
