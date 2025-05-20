import { View, Text, StyleSheet, Image, Pressable, ViewStyle } from 'react-native';

type Props = {
  titulo: string;
  descripcion: string;
  icono: any; // require() o { uri }
  onPress?: () => void;
  style?: ViewStyle;
};

export default function TarjetaRuta({ titulo, descripcion, icono, onPress, style }: Props) {
  return (
    <Pressable style={[styles.card, style]} onPress={onPress}>
      <Image source={icono} style={styles.icono} />
      <View style={styles.textos}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  icono: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginRight: 12,
  },
  textos: {
    flex: 1,
  },
  titulo: {
    fontSize: 17,
    fontWeight: '700',
    color: '#003366',
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
