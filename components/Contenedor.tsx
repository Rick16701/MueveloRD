import { View, StyleSheet, ViewProps } from 'react-native';
import { ReactNode } from 'react';

type Props = ViewProps & {
  children: ReactNode;
};

export default function Contenedor({ children, style, ...rest }: Props) {
  return (
    <View style={[styles.contenedor, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
});
