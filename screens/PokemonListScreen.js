import { useEffect, useState } from "react";

import AppLoading from "expo-app-loading";

import { StyleSheet, View, Text, FlatList } from "react-native";
import { getPokemons } from "../api/pokemons";
import { PokemonListItem } from "../components/PokemonListItem";

function renderPokemon(pokemonData) {
  const pressHandler = () => {
    this.navigate("PokemonOverview", {
      name: pokemonData.item.name,
      url: pokemonData.item.url,
    });
  };
  return (
    <PokemonListItem
      name={pokemonData.item.name}
      url={pokemonData.item.url}
      onPress={pressHandler}
    />
  );
}

export const PokemonListScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [pokemonsFromServer, setPokemonsFromServer] = useState([]);

  useEffect(() => {
    getPokemons()
      .catch(error => {
        throw error;
      })
      .then(resolve => {
        console.log("fetched");
        setPokemonsFromServer(resolve.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <AppLoading />
  ) : (
    <FlatList
      data={pokemonsFromServer}
      keyExtractor={pokemon => pokemon.name}
      renderItem={renderPokemon.bind(navigation)}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});
