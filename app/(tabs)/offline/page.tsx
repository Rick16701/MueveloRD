import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function OfflineScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icono}>📴</Text>
      <Text style={styles.titulo}>Modo Offline</Text>
      <Text style={styles.descripcion}>
        Actualmente no tienes conexión a internet. Algunas funciones pueden no estar disponibles.
      </Text>

      <TouchableOpacity style={styles.boton} onPress={() => router.push('/(tabs)/principal/page')}>
        <Text style={styles.botonTexto}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icono: {
    fontSize: 64,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  descripcion: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 32,
  },
  boton: {
    backgroundColor: '#008CBA',
    padding: 14,
    borderRadius: 8,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
