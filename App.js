import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Style Test');
 
  function onClickHandler () {
    setName('Style Test is Done')
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Button title='Update State' onPress={onClickHandler}> </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '50%', 
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#ff00ff',
    borderRadius: 10,
  },
  text:{
    color: "#000",
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
  }
});