import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

export default function InputTexto(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#888"
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 8,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: '#fff',
    color: '#000'
  },
});
