import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Colors } from "@/constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, useRouter } from "expo-router";
import { loginUser } from "../firebase/auth";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import { initialUserCredentials, UserCredentials } from "../types";

export default function LoginScreen() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (userCredentials: UserCredentials) => {
    try {
      const user = await loginUser(
        userCredentials.email,
        userCredentials.password
      );
      setMessage(`Bienvenido: ${user.email}`);
      router.push("/(tabs)/profile");
    } catch (error: any) {
      setMessage(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign In</Text>
      </View>

      <Formik
        initialValues={initialUserCredentials}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <View style={styles.form}>
            <TextInput
              style={styles.textInput}
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange("email")}
              keyboardType="email-address"
              placeholderTextColor="#aaa"
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.textInput}
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              secureTextEntry={true}
              placeholderTextColor="#aaa"
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Button
              title="Sign In"
              color={Colors.lightBlue.background}
              onPress={handleSubmit}
            />
            {message ? <Text style={styles.linkText}>{message}</Text> : null}

            <Link style={styles.linkText} href="/sign-up">
              Create an account!
            </Link>
          </View>
        )}
      </Formik>

      <View style={styles.socialSection}>
        <Text style={styles.socialText}>Sign In with social account</Text>
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
