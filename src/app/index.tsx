import { ScrollView, View, Text, StyleSheet, Alert, Linking } from 'react-native';
import MiBoton from '../components/MiBoton';

const correo = 'castanedaromerojuandiego@gmail.com';
const telefonos = ['3225460545', '3115408723'];

export default function Inicio() {
  const abrirCorreo = () => Linking.openURL(`mailto:${correo}`).catch(() => Alert.alert('Correo', correo));
  const llamar = (numero: string) => Linking.openURL(`tel:${numero}`).catch(() => Alert.alert('Teléfono', numero));

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <View style={styles.perfil}>
        <Text style={styles.avatar}>JD</Text>
        <Text style={styles.nombre}>Juan Diego Castañeda Romero</Text>
        <Text style={styles.titulacion}>Tecnólogo en formación en Análisis y Desarrollo de Software</Text>
        <Text style={styles.texto}>Soy una persona comprometida, con capacidad de aprendizaje, trabajo en equipo y orientación a resultados. Cuento con conocimientos en desarrollo web y bases de datos, y busco seguir fortaleciendo mis habilidades en el área de tecnología.</Text>
      </View>

      <Text style={styles.subtitulo}>Datos personales</Text>
      <View style={styles.datos}>
        <Text style={styles.dato}>Edad: 19 años</Text>
        <Text style={styles.dato}>Ciudad: Bogotá, Colombia</Text>
        <Text style={styles.dato}>Correo: {correo}</Text>
        <Text style={styles.dato}>Documento: C.C. 1.023.888.446</Text>
      </View>

      <Text style={styles.subtitulo}>Contacto</Text>
      <MiBoton titulo="Enviar correo" onPress={abrirCorreo} />
      <MiBoton titulo="Llamar: 322 546 0545" onPress={() => llamar(telefonos[0])} />
      <MiBoton titulo="Llamar: 311 540 8723" onPress={() => llamar(telefonos[1])} />

      <Text style={styles.subtitulo}>Conocimientos técnicos</Text>
      <View style={styles.datos}>
        <Text style={styles.dato}>HTML · CSS · JavaScript · TypeScript · Bootstrap</Text>
        <Text style={styles.dato}>React · Node.js · Express · PHP</Text>
        <Text style={styles.dato}>MySQL · PostgreSQL · Git · GitHub · Visual Studio Code</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { padding: 20, backgroundColor: '#F7F5FA', flexGrow: 1 },
  perfil: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 20, alignItems: 'center', marginBottom: 22 },
  avatar: { width: 82, height: 82, borderRadius: 41, overflow: 'hidden', textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#E9DFFF', color: '#6C3CC7', fontSize: 26, fontWeight: '800', marginBottom: 12 },
  nombre: { fontSize: 22, fontWeight: '800', color: '#252033', textAlign: 'center' },
  titulacion: { marginTop: 8, color: '#6C3CC7', fontWeight: '700', textAlign: 'center' },
  texto: { marginTop: 14, lineHeight: 22, color: '#514B5E', textAlign: 'center' },
  subtitulo: { fontSize: 18, fontWeight: '800', marginTop: 8, marginBottom: 8, color: '#252033' },
  datos: { backgroundColor: '#FFFFFF', borderRadius: 14, padding: 15, marginBottom: 12, borderWidth: 1, borderColor: '#E5E0EE' },
  dato: { color: '#514B5E', lineHeight: 23 }
});
