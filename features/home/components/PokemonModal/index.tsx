import React from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Props } from "./types.component";
import { getPokemonDetails } from "../../utils/getPokemonDetails.utility";

export default function PokemonModal(props: Props) {

  const pokemonDetails = getPokemonDetails(props.modalData)
  
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.pokemonName}>{pokemonDetails.name}</Text>
            <Text style={styles.pokemonId}>N.º {pokemonDetails.id}</Text>
          </View>

          <View style={styles.modalContent}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.pokemonImage}
                source={{ uri: pokemonDetails.avatar }}
              />
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.modalTitle}>Details </Text>
              <Text style={styles.modalText}>
                Base Exp: {pokemonDetails.base_experience}
              </Text>
              <Text style={styles.modalText}>Height: {pokemonDetails.height}</Text>
              <Text style={styles.modalText}>Weight: {pokemonDetails.weight}</Text>
              <Text style={styles.modalText}>
                Is Default: {pokemonDetails.is_default ? "Yes" : "No"}
              </Text>
              <Text style={styles.modalText}>Order: {pokemonDetails.order}</Text>

              <Text style={styles.modalTitle}>Abilities </Text>
              {pokemonDetails.abilities.map((ability, index) => (
                <Text key={index} style={styles.modalText}>
                  {ability.ability.name}
                  {ability.is_hidden ? "(Hidden)" : ""}
                </Text>
              ))}
            </View>
          </View>

          <Pressable style={styles.closeButton} onPress={props.onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
