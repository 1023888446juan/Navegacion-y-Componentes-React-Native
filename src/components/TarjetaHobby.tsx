import { Pressable, Text, StyleSheet } from 'react-native';

type Props = { nombre: string; detalle: string; onPress: () => void };

export default function TarjetaHobby({ nombre, detalle, onPress }: Props) {
  return (
    <Pressable style={styles.tarjeta} onPress={onPress}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.ayuda}>Toca para conocer más</Text>
      <Text style={styles.detalle}>{detalle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 14, marginBottom: 12, borderWidth: 1, borderColor: '#E5E0EE' },
  nombre: { fontSize: 16, fontWeight: '700', color: '#252033' },
  ayuda: { marginTop: 5, color: '#6C3CC7', fontSize: 12, fontWeight: '600' },
  detalle: { marginTop: 8, color: '#514B5E', lineHeight: 21 }
});
