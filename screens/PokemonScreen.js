import AppLoading from "expo-app-loading";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { getPokemon } from "../api/pokemons";
import { getPokemonImg } from "../utils/pokemon";

export const PokemonScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const title = route.params.name.toUpperCase();
  const url = route.params.url;
  const pokemonImg = getPokemonImg(url);

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });

    getPokemon(url)
      .catch(error => {
        throw error;
      })
      .then(response => {
        setPokemonInfo(response);
        // console.log(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={{ uri: pokemonImg }} />
      </View>
      <Text style={styles.h1}>{pokemonInfo.species.name}</Text>
      <View style={styles.additionInfoContainer}>
        <Text style={styles.h2}>Additional info</Text>

        <View>
          <Text style={styles.textItem}>Height: {pokemonInfo.height}</Text>
          <Text style={styles.textItem}>Weight: {pokemonInfo.weight}</Text>
          <View style={styles.abilityContainer}>
            <Text style={styles.textItem}>Abilities: </Text>

            <View style={styles.abilityInnerContainer}>
              {pokemonInfo.abilities.map((skill, index) => {
                return (
                  <Text style={[styles.ability, styles.textItem]}>
                    {`${skill.ability.name} ${
                      index + 1 < pokemonInfo.abilities.length ? "," : ""
                    }`}
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </View>
  ) : (
    <AppLoading />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // gap: 10,
  },
  image: {
    width: "60%",
    height: 200,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // backgroundColor: "#E0E0E0",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  h1: {
    textAlign: "center",
    textTransform: "capitalize",
    // fontWeight: "700",
    fontSize: 24,
    padding: 8,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 4,
    fontFamily: "playfairDisplay-bold",
  },
  h2: {
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: 24,
    padding: 8,
    fontFamily: "playfairDisplay-semiBold",
  },
  additionInfoContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  textItem: {
    marginVertical: 3,
    fontSize: 18,
    fontFamily: "playfairDisplay-medium",
  },
  ability: {
    paddingHorizontal: 5,
    // color: "white",
  },
  abilityContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  abilityInnerContainer: {
    flexDirection: "row",
  },
});
