import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import PokemonCard from "./components/PokemonCard";
import PokemonModal from "./components/PokemonModal";
import { sortElements } from "@/utils";
import usePokemon from "./hooks/usePokemon";

export default function HomeScreen() {
  const {
    pokemonDetails,
    pokemonsNotFavorites,
    pokemonsFavorites,
    isLoading,
    showPokemonModal,
    handleGetPokemonDetails,
    handleToggleFavorite,
    handleCloseModal,
    fetchPokemons,
  } = usePokemon();

  useEffect(() => {
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
            data={sortElements(pokemonsNotFavorites, false)}
            renderItem={({ item }) => (
              <PokemonCard
                name={item.name}
                url={item.url}
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
          data={sortElements(pokemonsFavorites, false)}
          renderItem={({ item }) => (
            <PokemonCard
              name={item.name}
              url={item.url}
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
      {pokemonDetails && (
        <PokemonModal
          visible={showPokemonModal}
          modalData={pokemonDetails}
          onClose={handleCloseModal}
        />
      )}
    </SafeAreaView>
  );
}
