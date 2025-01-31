import { useRouter } from "expo-router";
import React from "react";
import { registerUser } from "../firebase/auth";
import { UserCredentials } from "../types";
import { Alert } from "react-native";

export default function useSignUp() {
  const router = useRouter();

  const handleRegister = async (userCredentials: UserCredentials) => {
    try {
      const user = await registerUser(
        userCredentials.email,
        userCredentials.password
      );
      Alert.alert("Register Successfully!", "You have successfully sign up.");
      router.push("/(tabs)/profile");
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return { handleRegister };
}
