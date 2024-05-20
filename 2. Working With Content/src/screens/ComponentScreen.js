import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.heading}>This is a component screen!</Text>
    </View>
  );
};

export default ComponentScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
  },
});
