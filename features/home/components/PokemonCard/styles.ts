import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
      marginHorizontal: 5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      fontWeight: "500",
      color: "#333",
    },
  });