import React from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function PokemonModal(props: any) {
  // const modalData = props.modalData;
  const modalData = {
    id: 1,
    name: "pokemon 1",
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
    base_experience: 58,
    height: 50,
    is_default: false,
    order: 20,
    weight: 50,
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
  };
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.pokemonName}>{modalData.name}</Text>
            <Text style={styles.pokemonId}>N.º {modalData.id}</Text>
          </View>

          <View style={styles.modalContent}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.pokemonImage}
                source={{ uri: modalData.avatar }}
              />
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.modalTitle}>Details </Text>
              <Text style={styles.modalText}>
                Base Exp: {modalData.base_experience}
              </Text>
              <Text style={styles.modalText}>Height: {modalData.height}</Text>
              <Text style={styles.modalText}>Weight: {modalData.weight}</Text>
              <Text style={styles.modalText}>
                Is Default: {modalData.is_default ? "Yes" : "No"}
              </Text>
              <Text style={styles.modalText}>Order: {modalData.order}</Text>

              <Text style={styles.modalTitle}>Abilities </Text>
              {modalData.abilities.map((ability, index) => (
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
