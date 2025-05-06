import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const rutas = [
  {
    id: '1',
    nombre: 'Ruta Motoconcho Zona Colonial',
    coordenadas: { latitude: 18.4764, longitude: -69.8915 },
  },
  {
    id: '2',
    nombre: 'Ruta Turística Malecón',
    coordenadas: { latitude: 18.4667, longitude: -69.9271 },
  },
  {
    id: '3',
    nombre: 'Ruta Monumento Santiago',
    coordenadas: { latitude: 19.4512, longitude: -70.6943 },
  },
];

export default function RutasScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapa}
        initialRegion={{
          latitude: 18.4764,
          longitude: -69.8915,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {rutas.map((ruta) => (
          <Marker
            key={ruta.id}
            coordinate={ruta.coordenadas}
            title={ruta.nombre}
            description={`ID: ${ruta.id}`}
          />
        ))}
      </MapView>

      <View style={styles.listaContainer}>
        <FlatList
          data={rutas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.nombre}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6,
  },
  listaContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});
