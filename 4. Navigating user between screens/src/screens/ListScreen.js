import { FlatList, StyleSheet, Text, View } from "react-native";

export const ListScreen = () => {
  const friends = [
    { key: 1, name: "Alice" },
    { key: 2, name: "Bob" },
    { key: 3, name: "Charlie" },
    { key: 4, name: "Diana" },
    { key: 5, name: "Eve" },
    { key: 6, name: "Frank" },
    { key: 7, name: "Grace" },
    { key: 8, name: "Hank" },
    { key: 9, name: "Ivy" },
    { key: 10, name: "Jack" },
    { key: 11, name: "Kara" },
    { key: 12, name: "Leo" },
    { key: 13, name: "Mia" },
    { key: 14, name: "Nina" },
    { key: 15, name: "Oscar" },
  ];
  return (
    <View>
      <FlatList
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.text} key={item.key}>
              {item.name}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginHorizontal: 12,
    marginVertical: 3,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
