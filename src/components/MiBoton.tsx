import { Pressable, Text, StyleSheet } from 'react-native';

type Props = { titulo: string; onPress: () => void };

export default function MiBoton({ titulo, onPress }: Props) {
  return (
    <Pressable style={({ pressed }) => [styles.boton, pressed && styles.presionado]} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  boton: { backgroundColor: '#6C3CC7', paddingVertical: 13, paddingHorizontal: 18, borderRadius: 12, marginVertical: 6, alignItems: 'center' },
  presionado: { opacity: 0.75 },
  texto: { color: '#FFFFFF', fontWeight: '700' }
});
