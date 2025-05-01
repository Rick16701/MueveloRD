import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function TestFirestore() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'rutasPrueba'));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} =>`, doc.data());
        });
      } catch (error) {
        console.error('Error al leer Firestore:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text>Prueba de conexión a Firestore. Mira la consola.</Text>
    </View>
  );
}
