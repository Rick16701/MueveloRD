import { Text, Pressable, StyleSheet, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import { useRouter } from 'expo-router';

type Props = {
  texto: string;
  onPress?: () => void;
  destino?: string; // si se desea usar navegación por ruta
  style?: ViewStyle;
};

export default function BotonPrincipal({ texto, onPress, destino, style }: Props) {
  const router = useRouter();

  const handlePress = () => {
    if (destino) {
      router.push(destino);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable style={[styles.boton, style]} onPress={handlePress}>
      <Text style={styles.texto}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  texto: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
