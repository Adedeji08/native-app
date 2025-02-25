import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [send, setSend] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  function onPressHandler() {
    if (name.length > 3) {
      setSend(!send);
    } else {
      // Alert.alert(
      //   "Warning",
      //   `The name must be longer than 3 characters`,
      //   [
      //     {
      //       text: "Later",
      //       onPress: () => {
      //         console.warn("Do not show again!");
      //         setShowAlert(false);
      //       },
      //     },
      //     { text: "Cancel", onPress: () => console.warn("Cancerl Pressed!") },
      //     { text: "OK", onPress: () => console.warn("OK Pressed!") },
      //   ],
      //   { cancelable: true, onDismiss: () => console.warn("Alert dismissed!") }
      // );
      ToastAndroid.showWithGravity('The name must be longer than 3 characters',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
     
      )
    }
  }
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

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#dddddd" : "#00ff00" },
          styles.button,
        ]}
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        // disabled={send}
        android_ripple={{ color: "#00f" }}
      >
        <Text style={styles.text}>{send ? "Clear" : "Send"}</Text>
      </Pressable>

      {send ? (
        <Text style={styles.text}>You are registered as {name}</Text>
      ) : null}
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
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
    borderRadius: 12,
  },
});
