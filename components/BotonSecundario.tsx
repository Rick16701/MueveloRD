import { Text, Pressable, StyleSheet, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import { useRouter } from 'expo-router';

type Props = {
  texto: string;
  onPress?: () => void;
  destino?: string;
  style?: ViewStyle;
};

export default function BotonSecundario({ texto, onPress, destino, style }: Props) {
  const router = useRouter();

  const handlePress = () => {
    if (destino) {
      router.push(destino as any);
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
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
  },
  texto: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: '500',
  },
});
