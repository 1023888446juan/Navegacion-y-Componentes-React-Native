import { View, Text, StyleSheet } from 'react-native';

type Props = { cargo: string; empresa: string; periodo: string; descripcion: string };

export default function TarjetaExperiencia({ cargo, empresa, periodo, descripcion }: Props) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.empresa}>{empresa}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 14, marginBottom: 12, borderWidth: 1, borderColor: '#E5E0EE' },
  cargo: { fontSize: 16, fontWeight: '700', color: '#252033' },
  empresa: { marginTop: 6, color: '#6C3CC7', fontWeight: '600' },
  periodo: { marginTop: 4, color: '#777' },
  descripcion: { marginTop: 8, color: '#514B5E', lineHeight: 21 }
});
