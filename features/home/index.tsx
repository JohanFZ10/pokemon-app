import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import PokemonCard from "./components/PokemonCard";
import PokemonModal from "./components/PokemonModal";
import { Pokemon, PokemonDetails } from "./models";
import { getPokemonDetailsFromApi, getPokemonsFromApi } from "./api/pokemonApi.service";
import { sortElements } from "@/utils";

export default function HomeScreen() {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
  const [pokemonsNotFavorites, setPokemonsNotFavorites] = useState<Pokemon[]>([]);
  const [pokemonsFavorites, setPokemonsFavorites] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showPokemonModal, setShowPokemonModal] = useState(false);

  const handleGetPokemonDetails = async (url:string) => {
    try {
      const details = await getPokemonDetailsFromApi(url);
      setPokemonDetails(details); 
      setShowPokemonModal(true);
    } catch (error) {
      console.error("Error to getPokemonDetailsFromApi:", error);
    }
  };
  const handleCloseModal = () => {
    setShowPokemonModal(false);
  };

  const handleToggleFavorite  = (pokemon: Pokemon) =>{
    if(pokemonsFavorites.some((pokemonFav) => pokemonFav.name === pokemon.name)){
      setPokemonsNotFavorites((prev) => [...prev, pokemon]);
      setPokemonsFavorites((prev) => prev.filter((pokemonFav) => pokemonFav.name !==  pokemon.name));
    }else{
      setPokemonsFavorites((prev) => [...prev, pokemon]);
      setPokemonsNotFavorites((prev) => prev.filter((pokemonNotFav) => pokemonNotFav.name!==  pokemon.name));
    }
  }
  useEffect(() => {
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

    fetchPokemons();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerNotFavorites}>
        <Text style={styles.title}>Not Favorites Pokemons</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={pokemonsNotFavorites}
            renderItem={({ item }) => (
              <PokemonCard
                name={item.name}
                url={
                  item.url
                }
                onPokemonSelect={handleGetPokemonDetails}
                onFavoriteToggle={() => handleToggleFavorite(item)} 
                isFavorite={false}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      <View style={styles.containerFavorites}>
        <Text style={styles.title}>Favorites Pokemons </Text>
        <FlatList
          data={pokemonsFavorites}
          renderItem={({ item }) => (
            <PokemonCard
              name={item.name}
              url={
                item.url
              }
              onPokemonSelect={handleGetPokemonDetails}
              onFavoriteToggle={() => handleToggleFavorite(item)} 
              isFavorite={true}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      {pokemonDetails && <PokemonModal visible={showPokemonModal} modalData = {pokemonDetails} onClose = {handleCloseModal}/>}
    </SafeAreaView>
  );
}
