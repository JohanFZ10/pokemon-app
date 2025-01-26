import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { FlatList, Text, View } from "react-native";
import PokemonCard from "./components/PokemonCard";
import PokemonModal from "./components/PokemonModal";

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
  const [showPokemonModal, setShowPokemonModal] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerNotFavorites}>
        <Text style={styles.title}>Pokemons Not Favorites</Text>
        <FlatList
          data={pokemonsNotFavorites}
          renderItem={({ item }) => (
            <PokemonCard
              name={item.name}
              image={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
              }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.containerFavorites}>
        <Text style={styles.title}>Pokemons Favorites</Text>
        <FlatList
          data={pokemonsFavorites}
          renderItem={({ item }) => (
            <PokemonCard
              name={item.name}
              image={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png"
              }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <PokemonModal visible = {showPokemonModal}/>
    </SafeAreaView>
  );
}
