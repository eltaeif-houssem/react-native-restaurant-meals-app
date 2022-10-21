import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
  return data.map((dataItem, key) => (
    <View style={styles.listItem} key={key}>
      <Text style={styles.itemText}>{dataItem}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },

  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

export default List;
