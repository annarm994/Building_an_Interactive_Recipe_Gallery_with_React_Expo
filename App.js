import React from 'react';
import { StyleSheet, View } from 'react-native';
import Gallery from './src/Gallery';

export default function App() {
  return (
    <View style={styles.container}>
      <Gallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
