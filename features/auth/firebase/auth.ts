import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { signOut } from 'firebase/auth';
import { auth } from "./firebaseConfig";

// Registrar un usuario nuevo
export const registerUser = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Iniciar sesión con email y contraseña
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Función para cerrar sesión
export const logoutUser = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.error('Error al cerrar sesión:', error.message);
      throw error; 
    }
  };
