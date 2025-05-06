import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { loginConEmail } from '../auth/loginConEmail'; // Asegúrate de que esta ruta sea correcta

export default function InicioSesionScreen() {
  const router = useRouter();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const iniciarSesion = async () => {
    try {
      await loginConEmail(correo, contrasena);
      router.replace('/(tabs)/principal/page'); // Redirige a pantalla principal
    } catch (error: any) {
      Alert.alert('Error de autenticación', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Iniciar Sesión</Text>

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

      <TouchableOpacity style={styles.boton} onPress={iniciarSesion}>
        <Text style={styles.botonTexto}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/registro/page')}>
        <Text style={styles.enlace}>¿No tienes cuenta? Regístrate</Text>
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
  },
  input: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  boton: {
    backgroundColor: '#008CBA',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
  },
  enlace: {
    color: '#008CBA',
    textAlign: 'center',
    marginTop: 16,
  },
});
