import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { getPokemonIdFromURL } from "../../utils/getPokemonIdFromURL.utility";
import { Props } from "./types.component";

export default function PokemonCard({ name, url, onPokemonSelect }: Props) {
  const pokemonID = getPokemonIdFromURL(url) || 1;

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonID}.png`,
        }} // Asegúrate de usar URLs o imágenes locales correctamente
        style={styles.image}
      />
      <TouchableOpacity onPress={() => onPokemonSelect(url)}>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
