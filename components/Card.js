import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../constants/colors";

const Card = props => {
  return <View style={styles.container}>
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
