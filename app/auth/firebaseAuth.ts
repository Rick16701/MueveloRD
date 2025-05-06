// app/auth/firebaseAuth.ts
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

/**
 * Inicia sesión con correo y contraseña en Firebase Auth.
 * @param correo - Email del usuario
 * @param contrasena - Contraseña del usuario
 * @returns Usuario autenticado o lanza error
 */
export const loginConEmail = async (correo: string, contrasena: string) => {
  if (!correo || !contrasena) {
    throw new Error('Correo y contraseña son obligatorios');
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, correo, contrasena);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(traducirErrorFirebase(error.code));
  }
};

/**
 * Registra un nuevo usuario con correo y contraseña.
 */
export const registrarUsuario = async (correo: string, contrasena: string) => {
  if (!correo || !contrasena) {
    throw new Error('Correo y contraseña son obligatorios');
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, correo, contrasena);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(traducirErrorFirebase(error.code));
  }
};

/**
 * Cierra sesión del usuario actual
 */
export const cerrarSesion = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error('Error al cerrar sesión');
  }
};

/**
 * Traductor básico de errores comunes de Firebase Auth
 */
const traducirErrorFirebase = (codigo: string): string => {
  switch (codigo) {
    case 'auth/invalid-email':
      return 'El correo no es válido';
    case 'auth/user-not-found':
      return 'Usuario no encontrado';
    case 'auth/wrong-password':
      return 'Contraseña incorrecta';
    case 'auth/email-already-in-use':
      return 'Este correo ya está en uso';
    case 'auth/weak-password':
      return 'La contraseña es muy débil';
    default:
      return 'Error desconocido';
  }
};
