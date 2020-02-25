// React imports
import React from "react";
import { View, StyleSheet } from "react-native";

// Custom imports
import colors from "../constants/colors";

const Card = props => {
  return <View style={[styles.container, props.style]}>
      {props.children}
  </View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paper,
    borderRadius: 10,
    height: 50,
    width: 50
  }
});

export default Card;
