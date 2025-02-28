import { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Modal,
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
  const [showWarning, setShowWarning] = useState(false);
  function onPressHandler() {
    if (name.length > 3) {
      setSend(!send);
    } else {
      setShowWarning(true);
    }
  }
  return (
    <ImageBackground source={{uri:'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg'}} style={styles.body}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => setShowWarning(false)}
        animationType="slide"
        hardwareAccelerated
      >
        <View style={styles.centered_value}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The text must be longer than 3 characters
              </Text>
            </View>
            <Pressable
              android_ripple={{ color: "#fff" }}
              onPress={() => setShowWarning(false)}
              style={styles.warning_button}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.text}>Please w rite your name:</Text>

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
        <View style={styles}>
          <Text style={styles.text}>You are registered as {name}</Text>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require("./assets/done.png")}
          />
        </View>
      ) : (
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={{
            uri: "https://www.citypng.com/public/uploads/preview/png-orange-error-warning-icon-701751694975098vxx0mgchjm.png",
          }}
          blurRadius={5}
        />
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    color: "#000",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
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

  centered_value: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },

  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  warning_button: {
    backgroundColor: "#00ffff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
