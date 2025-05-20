import { Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type Props = {
  texto: string;
  style?: ViewStyle;
  textoStyle?: TextStyle;
};

export default function Encabezado({ texto, style, textoStyle }: Props) {
  return (
    <Text style={[styles.titulo, textoStyle]}>
      {texto}
    </Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#002e5b',
    textAlign: 'center',
    marginVertical: 12,
  },
});
