import { PokemonDetails } from "../models";

export const getPokemonsFromApi = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      return(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  export const getPokemonDetailsFromApi = async (url: string) => {
    try {
      const response = await fetch(url);
      const data: PokemonDetails = await response.json();
      return(data);
    } catch (error) {
      console.error("Error fetching data getPokemonDetailsFromApi:", error);
      throw error;
    }
  };