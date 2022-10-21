import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

// import components
import MealsList from "../components/MealsLIst/MealsList";

const MealsOverViewScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverViewScreen;
