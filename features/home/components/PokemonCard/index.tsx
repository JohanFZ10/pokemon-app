import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { getPokemonIdFromURL } from "../../utils/getPokemonIdFromURL.utility";
import { Props } from "./types.component";
import { FontAwesome } from "@expo/vector-icons";

export default function PokemonCard({ name, url, isFavorite, onPokemonSelect, onFavoriteToggle }: Props) {
 
  const pokemonID = getPokemonIdFromURL(url) || 1;

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonID}.png`,
        }} 
        style={styles.image}
      />
      <TouchableOpacity onPress={() => onPokemonSelect(url)}>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onFavoriteToggle}>
        <FontAwesome
          name={isFavorite ? "star" : "star-o"} 
          size={20}
          color={isFavorite ? "gold" : "gray"} 
          style={styles.favoriteIcon}
        />
      </TouchableOpacity>
    </View>
  );
}
