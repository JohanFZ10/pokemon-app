import { PokemonDetails } from "../models";

export const getPokemonsFromApi = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    const pokemonInfo = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const details = await getPokemonDetailsFromApi(pokemon.url);
        return {
          name: pokemon.name,
          url: pokemon.url,
          height: details.height,
        };
      })
    );
    return pokemonInfo;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getPokemonDetailsFromApi = async (url: string) => {
  try {
    const response = await fetch(url);
    const data: PokemonDetails = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data getPokemonDetailsFromApi:", error);
    throw error;
  }
};
