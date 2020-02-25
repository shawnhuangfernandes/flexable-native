// React imports
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// Custom components
import Card from "../components/Card";
import colors from "../constants/colors"

const MenuSelectionScreen = ({ navigation }) => {
  return <View style={styles.screen}>
    <Text>This Is The Menu Selection Screen</Text>
    <Button
        title="Logout"
        onPress={() => navigation.navigate("LandingScreen")}
      />
  </View>;
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    paddingTop: 40,
    borderWidth: 0,
    paddingHorizontal: 15,
    backgroundColor: colors.primary
  }
});

export default MenuSelectionScreen;
