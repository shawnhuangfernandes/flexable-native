// React imports
import React from "react";
import { View, StyleSheet } from "react-native";

const ButtonContainer = (props) => {
  return <View style={styles.root}>
      {props.children}
  </View>;
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "blue",
    height: "25%",
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default ButtonContainer;
