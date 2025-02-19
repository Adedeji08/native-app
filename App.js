import { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { key: 1, item: "Item 1" },
    { key: 2, item: "Item 2" },
    { key: 3, item: "Item 3" },
    { key: 4, item: "Item 4" },
    { key: 5, item: "Item 5" },
    { key: 6, item: "Item 6" },
    { key: 7, item: "Item 7" },
    { key: 8, item: "Item 8" },
    { key: 9, item: "Item 9" },
    { key: 33, item: "Item 10" },
    { key: 44, item: "Item 19" },
    { key: 68, item: "Item 35" },
    { key: 0, item: "Item 120" },
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  function onRefresh() {
    setRefreshing(true);
    setItems([...items, { key: 69, item: "Item 69" }]);
    setRefreshing(false);
  }
  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={["#ff00ff"]}
        />
      }
    >
      {items.map((object) => {
        return (
          <View style={styles.item} key={object?.key}>
            <Text style={styles.text}>{object?.item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#4ae1fa",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: "#000",
    fontSize: 45,
    fontStyle: "italic",
    margin: 10,
  },
});
