import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Alert, View, StatusBar, Platform, SafeAreaView, Image, Button} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Salam alaikom!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColore: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 // Add statusbar padding if android
  },
});
