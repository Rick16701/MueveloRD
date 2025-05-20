import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  titulo: string;
  detalle: string;
  icono?: keyof typeof Ionicons.glyphMap;
  style?: ViewStyle;
};

export default function TarjetaInfo({ titulo, detalle, icono = 'information-circle-outline', style }: Props) {
  return (
    <View style={[styles.card, style]}>
      <Ionicons name={icono} size={24} color="#007bff" style={{ marginRight: 10 }} />
      <View>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.detalle}>{detalle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f1f5ff',
    padding: 14,
    marginVertical: 8,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#003366',
  },
  detalle: {
    fontSize: 13,
    color: '#444',
    marginTop: 2,
  },
});
