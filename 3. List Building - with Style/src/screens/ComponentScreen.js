import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ComponentScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/id/10/200/300" }}
        />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid
          veniam corporis, explicabo nulla autem ducimus omnis accusantium odit,
          natus obcaecati. Ipsa voluptate voluptatem et placeat consequuntur
          nobis sed ducimus eos sequi, animi incidunt beatae repellendus, ab
          suscipit fuga accusantium assumenda optio debitis distinctio minima
          laudantiume, consectetur harum tenetur iure error molestias ducimus
          accusantium fugiat ab omnis libero hic, iusto amet temporibus natus et
          repellat rem? Alias ipsa dicta quae minima nobis cum quibusdam
          asperiores tempora. Mollitia, magnam similique ab ipsam quam
          recusandae veniam nulla vel quis deserunt rem, asperiores aspernatur
          officia error voluptatem animi ducimus commodi perspiciatis aut?
          Soluta incidunt ipsam consequatur magnam, dolores debitis eum nostrum
          at mollitia id illum animi asperiores laboriosam natus ullam numquam
          iusto eveniet architecto accusamus? Totam laboriosam numquam quidem
          ratione provident voluptatem iure natus! Error natus est dicta quam
          perferendis similique, suscipit iusto doloribus eveniet deleniti
          doloremque harum consequuntur corporis, earum quod ab nemo.
          Necessitatibus, rerum, alias dicta eius harum excepturi distinctio sed
          quasi omnis iusto beatae at explicabo, numquam officiis quod ex quam
          delectus quo dolorum. Voluptate facilis, in voluptatibus id fugiat non
          hic, numquam iure obcaecati placeat consequuntur. Cumque nisi dolore
          sapiente eum. Qui ducimus similique excepturi cum quam doloremque
          consectetur explicabo, eius nihil numquam, mporibus rem aspernatur?
          Sint ipsa sunt minima, beatae facere nam!
        </Text>
      </ScrollView>
    </View>
  );
};

export default ComponentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  image: {
    width: 400,
    height: 300,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    marginTop: 15,
    alignSelf: "center",
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    textAlign: "justify",
  },
});
