import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export default function FirestoreScreen() {
  const [rutas, setRutas] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'rutasPrueba'));
        const datos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRutas(datos);
      } catch (error) {
        console.error('Error al obtener datos de Firestore:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📄 Rutas disponibles:</Text>
      <FlatList
        data={rutas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text>Tipo: {item.tipo}</Text>
            <Text>¿Activo?: {item.activo ? 'Sí' : 'No'}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
