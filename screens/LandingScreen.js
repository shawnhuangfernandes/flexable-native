// React Native imports
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Custom imports
import colors from "../constants/colors";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the landing screen</Text>
      <Button
        title="Go to Authenticate"
        onPress={() => navigation.navigate("AuthenticateScreen")}
      />
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
