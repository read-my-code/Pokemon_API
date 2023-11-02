export function getPokemonImg(url) {
  const regex = /\/pokemon\/(\d+)\//;
  const pokemonIndex = url.match(regex)[1];
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

  return pokemonImageUrl;
}
