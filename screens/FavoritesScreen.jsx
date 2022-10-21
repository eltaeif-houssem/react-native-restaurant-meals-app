import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsLIst/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
const FavoritesScreen = () => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default FavoritesScreen;
