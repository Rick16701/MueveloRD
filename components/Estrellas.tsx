import { View, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

type Props = {
  valor: number;
  onCambiar?: (valor: number) => void;
};

export default function Estrellas({ valor, onCambiar }: Props) {
  const [calificacion, setCalificacion] = useState(valor);

  const cambiarValor = (nuevo: number) => {
    setCalificacion(nuevo);
    onCambiar?.(nuevo);
  };

  return (
    <View style={styles.fila}>
      {[1, 2, 3, 4, 5].map((num) => (
        <Pressable key={num} onPress={() => cambiarValor(num)}>
          <Ionicons
            name={num <= calificacion ? 'star' : 'star-outline'}
            size={28}
            color="#f6a700"
            style={{ marginHorizontal: 3 }}
          />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
});
