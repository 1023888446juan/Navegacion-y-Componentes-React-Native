# Hoja de Vida Móvil - Juan Diego Castañeda Romero

Aplicación móvil desarrollada con React Native y Expo Router, con cuatro pestañas: Inicio, Estudios, Experiencia e Intereses.

## Ejecutar en Visual Studio Code (Windows)
1. Instala Node.js LTS.
2. Abre esta carpeta en Visual Studio Code.
3. En Terminal > Nuevo terminal, ejecuta:
   ```bash
   npm install
   npx expo install --fix
   npx expo start
   ```
4. Escanea el código QR con Expo Go en el celular. También puedes presionar `w` en la terminal para abrir la versión web si está configurada.

Si aparece un error de dependencias, ejecuta `npx expo install --fix` y vuelve a iniciar con `npx expo start -c`.

## Estructura
- `src/app/_layout.tsx`: navegación inferior.
- `src/app/index.tsx`: perfil, datos personales, conocimientos y contacto.
- `src/app/estudios.tsx`: formación académica.
- `src/app/experiencia.tsx`: experiencia informal en Variedades L&L.
- `src/app/hobbies.tsx`: intereses derivados de la hoja de vida; no se inventaron pasatiempos no indicados.
- `src/components/`: componentes reutilizables.

## Importante antes de entregar
- Verifica que todos los datos personales estén correctos y decide si deseas mostrar el número de documento en la aplicación.
- En la hoja de vida no se indica la institución donde se realizaron el Técnico en Programación de Software ni el curso de Inglés Básico Nivel I; aparecen como “institución por confirmar”.
- La hoja de vida no contiene enlaces de GitHub o LinkedIn ni hobbies personales.
- Ejecuta y prueba la app en Expo Go, toma capturas reales de las cuatro pestañas y registra al menos 10 commits reales en GitHub. No afirmes pruebas o commits que no hayas realizado.


## Hobbies incluidos
La pestaña Hobbies presenta cinco pasatiempos personales: escuchar música, jugar videojuegos, leer poemas, salir a caminar e ir al gimnasio. Cada tarjeta muestra una descripción y abre un mensaje al tocarla.
