import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        textContentType="emailAddress"
        autoCapitalize="none"
        autoComplete="email"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: 200,
    height: 40,
    margin: 12,
    padding: 10,
  },
});
