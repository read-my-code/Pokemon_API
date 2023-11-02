import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import { PokemonListScreen } from "./screens/PokemonListScreen";
import { PokemonScreen } from "./screens/PokemonScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  useFonts({
    "playfairDisplay-medium": require("./assets/fonts/PlayfairDisplay-Medium.ttf"),
    "playfairDisplay-semiBold": require("./assets/fonts/PlayfairDisplay-SemiBold.ttf"),
    "playfairDisplay-bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PokemonList"
          component={PokemonListScreen}
          options={{
            title: "Pokemons",
          }}
        />
        <Stack.Screen name="PokemonOverview" component={PokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
