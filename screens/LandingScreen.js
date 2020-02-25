// React Native imports
import React from "react";
import { View, Button, StyleSheet } from "react-native";

// Custom imports
import colors from "../constants/colors";
import Header from "../components/Header";
import ActiveImage from '../components/ActiveImage'
import ButtonContainer from '../components/ButtonContainer'

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Header />
      <ActiveImage />
      <ButtonContainer>
        <Button
          title="To Login"
          onPress={() => navigation.navigate("AuthenticateScreen")}
        />
      </ButtonContainer>
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
  }
});

export default LandingScreen;
