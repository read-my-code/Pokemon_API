import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Pressable,
} from "react-native";

import { getPokemonImg } from "../utils/pokemon";

export const PokemonListItem = ({ name, url, onPress }) => {
  const pokemonImageUrl = getPokemonImg(url);

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#5B99D7" }}
        style={({ pressed }) => [
          styles.outerContainer,
          pressed ? styles.pressedButtonIOS : null,
        ]}
        onPress={onPress}
      >
        <Image style={styles.image} source={{ uri: pokemonImageUrl }} />
        <Text style={styles.name}>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "#E0E0E0",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  outerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: "70%",
    height: "70%",
    marginBottom: 5,
  },
  pressedButtonIOS: {
    opacity: 0.5,
  },
  name: {
    textTransform: "capitalize",
    fontSize: 18,
    fontFamily: "playfairDisplay-semiBold",
  },
});
