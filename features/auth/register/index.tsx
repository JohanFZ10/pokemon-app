import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Colors } from "@/constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Repeat Password"
          secureTextEntry={true}
          placeholderTextColor="#aaa"
        />
        <Button title="Sign Up" color={Colors.lightBlue.background} />
        <Link style={styles.linkText} href="/">I have an account!</Link>
      </View>

      <View style={styles.socialSection}>
        <Text style={styles.socialText}>Sign Up with social account</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome size={28} name="facebook" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome size={28} name="google" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome size={28} name="twitter" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
