// React Native imports
import React from "react";
import { View, Button, Image, StyleSheet } from "react-native";

// Custom imports
import colors from "../constants/colors";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>

      </View>
      <View style={styles.body}>
        
      </View>
      <View style={styles.buttonContainer}>
      <Button
        title="To Login"
        onPress={() => navigation.navigate("AuthenticateScreen")}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    paddingVertical: 40,
    borderWidth: 0,
    paddingHorizontal: 15,
    backgroundColor: colors.primary
  },
  header: {
    backgroundColor: 'red',
    height: '25%',
  },
  body: {
    backgroundColor: 'green',
    height: '50%',
  },
  buttonContainer: {
    backgroundColor: 'blue',
    height: '25%',
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export default LandingScreen;
