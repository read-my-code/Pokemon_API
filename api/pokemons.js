export function getPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100").then(
    result => result.json()
  );
}

export function getPokemon(url) {
  return fetch(url).then(result => result.json());
}
