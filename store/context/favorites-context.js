import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMeals((state) => [...state, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMeals((state) => state.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: favoriteMeals,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoritesContextProvider;
