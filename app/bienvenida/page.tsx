import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function BienvenidaScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Bienvenido a MuéveloRD!</Text>
      <Text style={styles.descripcion}>
        Explora rutas, atracciones turísticas y medios de transporte locales.
      </Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => router.push('/inicio-sesion/page')}
      >
        <Text style={styles.botonTexto}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton, styles.botonSecundario]}
        onPress={() => router.push('/registro/page')}
      >
        <Text style={styles.botonTexto}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
    textAlign: 'center',
  },
  descripcion: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 32,
  },
  boton: {
    backgroundColor: '#008CBA',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 8,
  },
  botonSecundario: {
    backgroundColor: '#00BFA5',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
  },
});
