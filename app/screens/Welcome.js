import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end"
  },
  loginButton: {
    width: "100%",
    height: 45,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 45,
    backgroundColor: "#4ecdc4",
  }
});
