/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import ColorSchema from './assets/ColorSchema.js';
import Game from './src/views/Game';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Game />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: ColorSchema.background.normal,
    flex: 1,
  },
});

export default App;