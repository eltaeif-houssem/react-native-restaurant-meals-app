import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

// import components
import { CategoryGridTile } from "../components";

const CategoriesScreen = ({ navigation }) => {
  // define the render function
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverView", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CategoriesScreen;
