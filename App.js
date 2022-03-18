import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Clicked!")
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={handlePress}>Salam alaikom!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
