import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function CalificacionScreen() {
  const [calificacion, setCalificacion] = useState(0);

  const enviarCalificacion = () => {
    if (calificacion === 0) {
      Alert.alert('Selecciona una calificación antes de enviar.');
      return;
    }
    Alert.alert('¡Gracias!', `Has calificado con ${calificacion} estrella(s).`);
    setCalificacion(0); // Reiniciar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Califica tu experiencia</Text>
      <View style={styles.estrellasContainer}>
        {[1, 2, 3, 4, 5].map((estrella) => (
          <TouchableOpacity
            key={estrella}
            onPress={() => setCalificacion(estrella)}
            style={[
              styles.estrella,
              calificacion >= estrella && styles.estrellaActiva
            ]}
          >
            <Text style={styles.estrellaTexto}>★</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.boton} onPress={enviarCalificacion}>
        <Text style={styles.botonTexto}>Enviar calificación</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#222',
  },
  estrellasContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  estrella: {
    marginHorizontal: 8,
    padding: 10,
  },
  estrellaActiva: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
  },
  estrellaTexto: {
    fontSize: 32,
    color: '#222',
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
    fontWeight: 'bold',
  },
});
