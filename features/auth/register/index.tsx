import React, { useState } from "react";
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Colors } from "@/constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, useRouter } from "expo-router";
import { initialUserCredentials, UserCredentials } from "../types";
import { registerUser } from "../firebase/auth";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import useSignUp from "../hooks/useSignUp";

export default function RegisterScreen() {
  const { handleRegister } = useSignUp();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <Formik
        initialValues={initialUserCredentials}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
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

            <TextInput
              style={styles.textInput}
              placeholder="Repeat Password"
              value={values.repeatPassword}
              onChangeText={handleChange("repeatPassword")}
              secureTextEntry={true}
              placeholderTextColor="#aaa"
            />
            {touched.repeatPassword && errors.repeatPassword && (
              <Text style={styles.errorText}>{errors.repeatPassword}</Text>
            )}

            <Button
              title="Sign Up"
              color={Colors.lightBlue.background}
              onPress={handleSubmit}
            />
            <Link style={styles.linkText} href="/">
              Already have an account? Sign in!
            </Link>
          </View>
        )}
      </Formik>

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
