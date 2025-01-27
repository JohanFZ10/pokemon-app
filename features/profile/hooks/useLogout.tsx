import { logoutUser } from "@/features/auth/firebase/auth";
import { useRouter } from "expo-router";
import React from "react";
import { Alert } from "react-native";

export default function useLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser();
      Alert.alert("Closed session", "You have successfully logged out.");
      router.push("/sign-up");
    } catch (error) {
      Alert.alert("Closed session error", "There was a problem logging out.");
    }
  };
  return { handleLogout };
}
