import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.7)", 
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      width: "90%",
      backgroundColor: "#ffffff",
      borderRadius: 15,
      padding: 20,
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      elevation: 5,
      alignItems: "center",
    },
    header: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 15,
    },
    pokemonName: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
      marginHorizontal: 10
    },
    pokemonId: {
      fontSize: 18,
      color: "#888",
    },
    modalContent: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginBottom: 10,
    },
    imageContainer: {
      flex:1,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 10,
    },
    pokemonImage: {
      width: 150,
      height: 150,
      alignSelf: "center",
      marginVertical: 15,
    },
    detailsContainer: {
      flex: 1,
    },
    modalText: {
      fontSize: 14,
      color: "#444",
      marginVertical: 2,
    },
    modalTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 5,
      textDecorationLine: "underline", 
    },
    closeButton: {
      width: "80%",
      marginTop: 15,
      backgroundColor: "#ff3e3e",
      borderRadius: 10,
      padding: 10,
      alignItems: "center",
    },
    closeButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });