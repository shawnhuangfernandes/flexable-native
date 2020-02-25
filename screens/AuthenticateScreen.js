// React imports
import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

// Custom imports
import colors from "../constants/colors";
import Header from "../components/Header";
import Card from "../components/Card"

const AuthenticateScreen = ({ navigation }) => {
  const loginBody = (
    <View>
      <View>
        <Text>Username</Text>
        <TextInput />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput />
      </View>
    </View>
  );

  const registerBody = (
    <View>
      <View>
        <Text>Username</Text>
        <TextInput />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput />
      </View>
      <View>
        <Text>Password Confirm</Text>
        <TextInput />
      </View>
    </View>
  )

  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.formHeader}>
        <View>
          <Text></Text>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
      {loginBody}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    paddingVertical: 40,
    paddingHorizontal: 15,
    borderWidth: 0,
    backgroundColor: colors.primary
  },
  formHeader: {}
});

export default AuthenticateScreen;
