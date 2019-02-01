import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeModules } from 'react-native';
const { RNIapModule } = NativeModules;
function hasIAP() {
  return !!NativeModules.RNIapModule;
}


export default class App extends React.Component {
  componentDidMount () {
    if (hasIAP()) {
      console.log('fuck yeaaa')
    } else {
      console.log('fuck noooo')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
