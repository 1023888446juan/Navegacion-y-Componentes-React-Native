import { View, Text, StyleSheet } from 'react-native';

type Props = { institucion: string; titulo: string; periodo: string; enCurso: boolean };

export default function TarjetaEstudio({ institucion, titulo, periodo, enCurso }: Props) {
  return (
    <View style={[styles.tarjeta, enCurso && styles.actual]}>
      <View style={styles.fila}>
        <Text style={styles.titulo}>{titulo}</Text>
        {enCurso && <Text style={styles.insignia}>En Curso</Text>}
      </View>
      <Text style={styles.institucion}>{institucion}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  tarjeta: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 14, marginBottom: 12, borderWidth: 1, borderColor: '#E5E0EE' },
  actual: { backgroundColor: '#F0E9FF', borderColor: '#8B5CF6' },
  fila: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 },
  titulo: { fontSize: 16, fontWeight: '700', color: '#252033', flex: 1 },
  institucion: { marginTop: 7, color: '#514B5E' },
  periodo: { marginTop: 4, color: '#777' },
  insignia: { color: '#FFFFFF', backgroundColor: '#7138B8', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, overflow: 'hidden', fontSize: 11, fontWeight: '700' }
});
