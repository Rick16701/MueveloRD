import { TextInput, StyleSheet, TextInputProps } from 'react-native';

export default function InputComentario(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#888"
      multiline
      numberOfLines={4}
      textAlignVertical="top"
      style={styles.comentario}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  comentario: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
    marginVertical: 12,
    minHeight: 100,
  },
});
