import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import PokemonCard from "./components/PokemonCard";
import PokemonModal from "./components/PokemonModal";
import { Pokemon, PokemonDetails } from "./models";
import { getPokemonDetailsFromApi, getPokemonsFromApi } from "./api/pokemonApi.service";

const pokemonsFavorites = [
  { name: "Pikachu", image: "pikachu.png" },
  { name: "Charmander", image: "charmander.png" },
  { name: "Squirtle", image: "squirtle.png" },
  { name: "Bulbasaur", image: "bulbasaur.png" },
];
const pokemonsNotFavorites = [
  { name: "Caterpie", image: "caterpie.png" },
  { name: "Pidgey", image: "pidgey.png" },
  { name: "Rattata", image: "rattata.png" },
  { name: "Spearow", image: "spearow.png" },
  { name: "Spearow", image: "spearow.png" },
  { name: "Spearow", image: "spearow.png" },
];

export default function HomeScreen() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
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

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const fetchedPokemons = await getPokemonsFromApi();
        setPokemons(fetchedPokemons);
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
        <Text style={styles.title}>Pokemons Not Favorites</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={pokemons}
            renderItem={({ item }) => (
              <PokemonCard
                name={item.name}
                url={
                  item.url
                }
                onPokemonSelect={handleGetPokemonDetails}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      <View style={styles.containerFavorites}>
        <Text style={styles.title}>Pokemons Favorites</Text>
        <FlatList
          data={pokemonsFavorites}
          renderItem={({ item }) => (
            <PokemonCard
              name={item.name}
              url={
                item.url
              }
              onPokemonSelect={handleGetPokemonDetails}
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
