import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig'; // Asegúrate que esta ruta sea correcta
import { doc, setDoc } from 'firebase/firestore';

export default function RegistroScreen() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const registrarUsuario = async () => {
    try {
      const credenciales = await createUserWithEmailAndPassword(auth, correo, contrasena);

      // Guardar datos básicos del usuario en Firestore
      await setDoc(doc(db, 'usuarios', credenciales.user.uid), {
        correo: correo,
        creadoEn: new Date(),
      });

      Alert.alert('Registro exitoso', '¡Bienvenido a MuéveloRD!');
      router.replace('/(tabs)/principal/page');
    } catch (error: any) {
      Alert.alert('Error al registrarse', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Crear Cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setCorreo}
        value={correo}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={setContrasena}
        value={contrasena}
      />

      <TouchableOpacity style={styles.boton} onPress={registrarUsuario}>
        <Text style={styles.botonTexto}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.enlace}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#222',
  },
  input: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  boton: {
    backgroundColor: '#00BFA5',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  enlace: {
    color: '#00BFA5',
    textAlign: 'center',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});
