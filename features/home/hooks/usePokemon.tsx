import React, { useState } from "react";
import { Pokemon, PokemonDetails } from "../models";
import {
  getPokemonDetailsFromApi,
  getPokemonsFromApi,
} from "../api/pokemonApi.service";

export default function usePokemon() {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
  const [pokemonsNotFavorites, setPokemonsNotFavorites] = useState<Pokemon[]>(
    []
  );
  const [pokemonsFavorites, setPokemonsFavorites] = useState<Pokemon[]>([]);
  const [showPokemonModal, setShowPokemonModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetPokemonDetails = async (url: string) => {
    try {
      const details = await getPokemonDetailsFromApi(url);
      setPokemonDetails(details);
      setShowPokemonModal(true);
    } catch (error) {
      console.error("Error to getPokemonDetailsFromApi:", error);
    }
  };

  const handleToggleFavorite = (pokemon: Pokemon) => {
    if (
      pokemonsFavorites.some((pokemonFav) => pokemonFav.name === pokemon.name)
    ) {
      setPokemonsNotFavorites((prev) => [...prev, pokemon]);
      setPokemonsFavorites((prev) =>
        prev.filter((pokemonFav) => pokemonFav.name !== pokemon.name)
      );
    } else {
      setPokemonsFavorites((prev) => [...prev, pokemon]);
      setPokemonsNotFavorites((prev) =>
        prev.filter((pokemonNotFav) => pokemonNotFav.name !== pokemon.name)
      );
    }
  };

  const handleCloseModal = () => {
    setShowPokemonModal(false);
  };

  const fetchPokemons = async () => {
    try {
      const fetchedPokemons = await getPokemonsFromApi();
      setPokemonsNotFavorites(fetchedPokemons);
    } catch (error) {
      console.error("Failed to fetch pokemons:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    pokemonDetails,
    pokemonsNotFavorites,
    pokemonsFavorites,
    isLoading,
    showPokemonModal,
    handleGetPokemonDetails,
    handleToggleFavorite,
    handleCloseModal,
    fetchPokemons,
  };
}
