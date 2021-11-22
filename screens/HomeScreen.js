import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export function HomeScreen({ route, navigation }) {

  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <View style={styles.jumbotron}>
          <Image
            source={{
              uri:
                "https://banner2.kisspng.com/20180207/bfq/kisspng-silhouette-icon-blank-person-template-5a7b67b1175f47.6504332315180369130957.jpg",
            }}
            style={{ width: 100, height: 100 }}
          />
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.text}>
              Tena
            </Text>
            <Text style={styles.text}>
              Lončarević
            </Text>
            <Text style={styles.text}>
              tloncarevic@ffos.hr
            </Text>
          </View>
      </View>
      <Text style={styles.text}>
        Filozofski fakultet
      </Text>
      <Text style={styles.text}>
        Srednja škola Isidora Kršnjavog Našice
      </Text>
      <Text style={styles.text}>
        Osnovna škola Dore Pejačević
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  jumbotron: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
    
  
  },
});
