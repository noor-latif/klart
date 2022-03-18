import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  StatusBar,
  Platform,
  SafeAreaView,
  View
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#1F1F24",
        flex: 1,
      }}
    >
      <View
          style={{
            backgroundColor: "yellow",
            flex: 2,
          }}
      />
      <View
          style={{
            backgroundColor: "pink",
            flex: 1,
          }}
      />
      <View
          style={{
            backgroundColor: "purple",
            flex: 1,
          }}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
