import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={(value) => setName(value)}
        placeholder="e.g Eben"
        secureTextEntry
      />
      <Text style={styles.text}>Your name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: "#000",
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 15,
  },
});
