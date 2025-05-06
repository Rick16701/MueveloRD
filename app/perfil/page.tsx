import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { router } from 'expo-router';
import { auth, db } from '../../firebaseConfig';

export default function PerfilScreen() {
  const [correo, setCorreo] = useState('');
  const [fechaRegistro, setFechaRegistro] = useState('');

  useEffect(() => {
    const usuario = getAuth().currentUser;
    if (usuario) {
      setCorreo(usuario.email || '');

      // Obtener más información desde Firestore
      const obtenerInfo = async () => {
        const ref = doc(db, 'usuarios', usuario.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          if (data.creadoEn?.toDate) {
            setFechaRegistro(data.creadoEn.toDate().toLocaleDateString());
          }
        }
      };

      obtenerInfo();
    }
  }, []);

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      router.replace('/inicio-sesion/page');
    } catch (error: any) {
      Alert.alert('Error al cerrar sesión', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi Perfil</Text>
      <Text style={styles.texto}>Correo: {correo}</Text>
      <Text style={styles.texto}>Registrado el: {fechaRegistro}</Text>

      <TouchableOpacity style={styles.boton} onPress={cerrarSesion}>
        <Text style={styles.botonTexto}>Cerrar Sesión</Text>
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
    marginBottom: 24,
    textAlign: 'center',
    color: '#222',
  },
  texto: {
    fontSize: 16,
    marginBottom: 12,
    color: '#444',
  },
  boton: {
    marginTop: 32,
    backgroundColor: '#E53935',
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
