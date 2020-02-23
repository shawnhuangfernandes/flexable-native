// React Native imports
import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

// Custom imports
import colors from "../constants/colors";

const LandingScreen = () => {
    return (
        <View>
            <Text style={styles.screen}>
                This is the landing screen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
      height: "100%",
      width: "100%",
      paddingTop: 40,
      paddingHorizontal: 15,
      backgroundColor: colors.primary
    }
  });
  

export default LandingScreen;