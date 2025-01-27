import React from "react";
import { loginUser } from "../firebase/auth";
import { UserCredentials } from "../types";
import { Alert } from "react-native";
import { useRouter } from "expo-router";

export default function useLogin() {
  const router = useRouter();
  const handleLogin = async (userCredentials: UserCredentials) => {
    try {
      const user = await loginUser(
        userCredentials.email,
        userCredentials.password
      );
      Alert.alert("Login Successfully!", "You have successfully logged in.");

      router.push("/(tabs)/profile");
    } catch (error: any) {
      Alert.alert("Failed login!", "Please verify your credentials.");
    }
  };
  return { handleLogin };
}
