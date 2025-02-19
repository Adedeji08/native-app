import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text}>4</Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.text}>5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0000ff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  view1: {
    flex:1,
    backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: "center",
  },

  view2: {
     flex:1,
    backgroundColor: "#f0f0ff",
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
     flex:1,
    backgroundColor: "#ff00ff",
    alignItems: "center",
    justifyContent: "center",
  },
  view4: {
     width: 100,
    height: 100,
    backgroundColor: "#ff0f0f",
    alignItems: "center",
    justifyContent: "center",
  },
  view5: {
     width: 100,
    height: 100,
    backgroundColor: "#ffff00",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 40,
    fontStyle: "italic",
    margin: 10,
  },
});
