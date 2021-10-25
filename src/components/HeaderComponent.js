import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Title, Subheading } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Post It</Title>
      <View style={styles.subHeading}>
        <Feather name="bookmark" size={16} color="#FAB633" />
        <Subheading style={styles.subheading}>Your favorite posts</Subheading>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#5A37D7",
  },
  subHeading: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    fontFamily: "InterBold",
    fontSize: 24,
  },
  subheading: {
    color: "#FFFFFFA0",
    marginLeft: 5,
  },
});
