import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => {
    const { item } = itemData;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});

export default MealsList;
