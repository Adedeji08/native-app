import { useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" },
    { name: "Item 5" },
    { name: "Item 6" },
    { name: "Item 7" },
    { name: "Item 8" },
    { name: "Item 9" },
    { name: "Item 10" },
    { name: "Item 19" },
    { name: "Item 35" },
    { name: "Item 120" },
  ]);

  // const DATA = [
  //    {
  //     title: 'Title 1',
  //     data: ['Item 1-1', 'Item 1-2', 'Item 1-3']
  //    },
  //    {
  //     title: 'Title 2',
  //     data: ['Item 2-1', 'Item 2-2', 'Item 2-3']
  //    },
  //    {
  //     title: 'Title 3',
  //     data: ['Item 3-1', 'Item 3-2', 'Item 3-3']
  //    },
  //    {
  //     title: 'Title 4',
  //     data: ['Item 4-1', 'Item 4-2', 'Item 4-3']
  //    },
  //    {
  //     title: 'Title 5',
  //     data: ['Item 5-1', 'Item 5-2', 'Item 5-3']
  //    },
  // ]
  const [Refreshing, setRefreshing] = useState(false);
  function onRefresh() {
    setRefreshing(true);
    setItems([...items, {name: "Item 69" }]);
    setRefreshing(false);
  }
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={items}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item?.name}</Text>
        </View>
      )}
      refreshControl={
             <RefreshControl
               refreshing={Refreshing}
               onRefresh={onRefresh}
               colors={["#ff00ff"]}
             />
      }
    />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={["#ff00ff"]}
    //     />
    //   }
    // >
    //   {items.map((object) => {
    //     return (
    //       <View style={styles.item} key={object?.key}>
    //         <Text style={styles.text}>{object?.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
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
