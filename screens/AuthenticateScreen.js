// React imports
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'

// Custom imports
import colors from "../constants/colors";

const AuthenticateScreen = ({navigation}) => {
    return (
        <View style ={styles.screen}>
            <Text>
                This is the login/signup screen
            </Text>
            <Button
        title="To Menu Selection"
        onPress={() => navigation.navigate("MenuSelectionScreen")}
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
      borderWidth: 0,
      backgroundColor: colors.primary
    }
  });

export default AuthenticateScreen;