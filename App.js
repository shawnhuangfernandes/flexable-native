// React Native imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Custom imports
import colors from './constants/colors'
import LandingScreen from './screens/LandingScreen'
import AuthenticateScreen from './screens/AuthenticateScreen'
import MenuSelectionScreen from './screens/MenuSelectionScreen'

export default function App() {
  return (
    <View style={styles.screen}>
          <MenuSelectionScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: colors.primary
  },
});
