import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View, SafeAreaView, Image, Button} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Salam alaikom!</Text>
      <Button
        color="orange"
        title="click me"
        title="Click me" onPress={() => console.log("click it!")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
