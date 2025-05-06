import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function PrincipalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Bienvenido a MuéveloRD!</Text>
      <Text style={styles.descripcion}>
        Explora rutas, atracciones turísticas, y opciones de transporte local.
      </Text>

      <View style={styles.botonesContainer}>
        <TouchableOpacity style={styles.boton} onPress={() => router.push('/(tabs)/rutas/page')}>
          <Text style={styles.botonTexto}>Ver Rutas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => router.push('/(tabs)/turismo/page')}>
          <Text style={styles.botonTexto}>Información Turística</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => router.push('/perfil/page')}>
          <Text style={styles.botonTexto}>Mi Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
    textAlign: 'center',
  },
  descripcion: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    color: '#555',
  },
  botonesContainer: {
    gap: 16,
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
});
