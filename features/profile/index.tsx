import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";
import useLogout from "./hooks/useLogout";

export default function ProfileScreen() {
  const { handleLogout } = useLogout();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileAvatarContainer}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
          }}
          style={styles.profileAvatar}
        />
      </View>

      {/* User Information */}
      <View style={styles.userInfo}>
        <Text style={styles.username}>Johan Fernandez</Text>
        <Text style={styles.email}>johanf@example.com</Text>
      </View>

      {/* Actions Section */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="edit" size={20} color="#fff" />
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.logoutButton]}
          onPress={handleLogout}
        >
          <FontAwesome name="sign-out" size={20} color="#fff" />
          <Text style={styles.actionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
