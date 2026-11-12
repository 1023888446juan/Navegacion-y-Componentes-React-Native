import { ScrollView, Text, StyleSheet } from 'react-native';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <Text style={styles.intro}>Mi formación académica</Text>
      <TarjetaEstudio institucion="SENA" titulo="Tecnólogo en Análisis y Desarrollo de Software" periodo="2026 · Actualmente cursando" enCurso={true} />
      <TarjetaEstudio institucion="SENA" titulo="English Does Work - Level 2" periodo="2026" enCurso={false} />
      <TarjetaEstudio institucion="Institución de formación por confirmar" titulo="Técnico en Programación de Software" periodo="2023 – 2025" enCurso={false} />
      <TarjetaEstudio institucion="Colegio José Martí" titulo="Bachiller académico" periodo="2019 – 2025" enCurso={false} />
      <TarjetaEstudio institucion="Institución de formación por confirmar" titulo="Curso de Inglés Básico Nivel I" periodo="2024" enCurso={false} />
      <TarjetaEstudio institucion="Colegio Alejandro Obregón" titulo="Educación básica primaria" periodo="2018" enCurso={false} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  contenedor: { padding: 20, backgroundColor: '#F7F5FA', flexGrow: 1 },
  intro: { fontSize: 20, fontWeight: '800', marginBottom: 16, color: '#252033' }
});
