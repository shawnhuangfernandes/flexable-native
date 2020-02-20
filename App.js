// React Native imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Custom imports
import colors from './constants/colors'
import LandingScreen from './screens/LandingScreen'

export default function App() {
  return (
    <View style={styles.screen}>
          <LandingScreen/>
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
