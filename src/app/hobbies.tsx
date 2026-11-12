import { ScrollView, Text, StyleSheet, Alert } from 'react-native';
import TarjetaHobby from '../components/TarjetaHobby';

export default function Hobbies() {
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <Text style={styles.titulo}>Mis hobbies e intereses</Text>
      <Text style={styles.intro}>
        En mi tiempo libre disfruto actividades que me ayudan a entretenerme,
        expresarme y mantener un buen equilibrio entre mi vida personal y mis estudios.
      </Text>

      <TarjetaHobby
        nombre="Escuchar música"
        detalle="Disfruto escuchar música en mis momentos libres y conocer diferentes canciones y géneros."
        onPress={() => Alert.alert('Escuchar música', 'La música me acompaña en mis momentos de descanso y me ayuda a relajarme.')}
      />
      <TarjetaHobby
        nombre="Jugar videojuegos"
        detalle="Me gusta jugar videojuegos como una forma de entretenimiento y diversión."
        onPress={() => Alert.alert('Jugar videojuegos', 'Disfruto los videojuegos porque me entretienen y me permiten asumir retos y desarrollar estrategias.')}
      />
      <TarjetaHobby
        nombre="Leer poemas"
        detalle="Me gusta leer poemas, disfrutar sus palabras y descubrir las emociones e ideas que transmiten."
        onPress={() => Alert.alert('Leer poemas', 'La poesía me permite disfrutar la lectura, reflexionar y conectar con diferentes sentimientos e ideas.')}
      />
      <TarjetaHobby
        nombre="Salir a caminar"
        detalle="Disfruto salir a caminar, despejar la mente y conocer nuevos lugares."
        onPress={() => Alert.alert('Salir a caminar', 'Caminar es una actividad que disfruto porque me permite despejarme, relajarme y mantenerme activo.')}
      />
      <TarjetaHobby
        nombre="Ir al gimnasio"
        detalle="Me gusta entrenar y cuidar mi condición física mediante el ejercicio."
        onPress={() => Alert.alert('Ir al gimnasio', 'Entrenar en el gimnasio me ayuda a mantenerme activo y a trabajar en mi bienestar y disciplina personal.')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { padding: 20, backgroundColor: '#F7F5FA', flexGrow: 1 },
  titulo: { fontSize: 22, fontWeight: '800', marginBottom: 10, color: '#252033' },
  intro: { color: '#625D6B', fontSize: 14, lineHeight: 21, marginBottom: 18 }
});
