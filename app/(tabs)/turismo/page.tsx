import { View, Text, StyleSheet, ScrollView } from 'react-native';

const sitiosTuristicos = [
  {
    nombre: 'Zona Colonial',
    descripcion: 'Centro histórico de Santo Domingo con arquitectura colonial, museos y plazas.',
  },
  {
    nombre: 'Malecón de Santo Domingo',
    descripcion: 'Paseo frente al mar con restaurantes, bares y monumentos culturales.',
  },
  {
    nombre: 'Faro a Colón',
    descripcion: 'Monumento en honor a Cristóbal Colón, con museo y vistas panorámicas.',
  },
  {
    nombre: 'Parque Mirador Sur',
    descripcion: 'Parque urbano ideal para caminar, montar bicicleta y disfrutar la naturaleza.',
  },
];

export default function TurismoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Información Turística</Text>

      {sitiosTuristicos.map((sitio, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.nombre}>{sitio.nombre}</Text>
          <Text style={styles.descripcion}>{sitio.descripcion}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#222',
  },
  card: {
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008CBA',
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 14,
    color: '#444',
  },
});
