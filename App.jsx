import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./store/redux/store";

// import screens
import {
  CategoriesScreen,
  MealsOverViewScreen,
  MealDetailScreen,
  FavoritesScreen,
} from "./screens";

// Import the store
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "About the meal",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "#fff",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                // title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverViewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              // options={{
              //   headerRight: () => {
              //     return <Button title="Tap me!" >In the header</Button>;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  root: {},
});
