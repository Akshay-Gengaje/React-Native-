import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({navigation}) => {
  console.log(navigation);
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Components")}>
        <Text style={styles.text}>Go To Component Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#615EFC",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});

export default HomeScreen;
