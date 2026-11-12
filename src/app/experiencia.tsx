import { ScrollView, Text, StyleSheet } from 'react-native';
import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <Text style={styles.intro}>Experiencia laboral</Text>
      <TarjetaExperiencia
        cargo="Asesor de ventas"
        empresa="Variedades L&L"
        periodo="Junio de 2024 – Febrero de 2025 · Experiencia informal"
        descripcion="Atención al cliente, venta de productos, organización de mercancía y revisión de inventario."
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  contenedor: { padding: 20, backgroundColor: '#F7F5FA', flexGrow: 1 },
  intro: { fontSize: 20, fontWeight: '800', marginBottom: 16, color: '#252033' }
});
