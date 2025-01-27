import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.black.text,
  },
  form: {
    marginBottom: 30,
  },
  textInput: {
    height: 50,
    borderColor: Colors.black.borderColor,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
    color: "#333",
    fontSize: 16,
  },
  linkText: {
    color: Colors.black.text,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: "underline", 
  },
  socialSection: {
    alignItems: "center",
  },
  socialText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  socialButton: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  errorText: {
    color: "#C70039"
  }
});
