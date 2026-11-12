import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#6C3CC7',
        tabBarInactiveTintColor: '#777',
        tabBarStyle: { height: 62, paddingBottom: 8, paddingTop: 6 },
        headerTitleStyle: { fontWeight: '700' }
      }}>
        <Tabs.Screen name="index" options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} />
        }} />
        <Tabs.Screen name="estudios" options={{
          title: 'Estudios',
          tabBarIcon: ({ color, size }) => <Ionicons name="school-outline" size={size} color={color} />
        }} />
        <Tabs.Screen name="experiencia" options={{
          title: 'Experiencia',
          tabBarIcon: ({ color, size }) => <Ionicons name="briefcase-outline" size={size} color={color} />
        }} />
        <Tabs.Screen name="hobbies" options={{
          title: 'Hobbies',
          tabBarIcon: ({ color, size }) => <Ionicons name="heart-outline" size={size} color={color} />
        }} />
      </Tabs>
    </>
  );
}
