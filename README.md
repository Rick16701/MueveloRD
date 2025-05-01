# 📱 MuéveloRD – Prototipo Inicial

Este repositorio contiene el desarrollo del prototipo inicial de la aplicación **MuéveloRD**, una app de movilidad urbana y turística en la República Dominicana, como parte del proyecto de grado de Ingeniería en Sistemas (PUCMM).

---

## 📂 Estructura del repositorio

| Archivo / Carpeta                    | Descripción                                                                 |
|-------------------------------------|-----------------------------------------------------------------------------|
| `firebaseConfig.js`                 | Configuración del proyecto Firebase (Firestore inicializado)               |
| `TestFirestore.js`                  | Componente de prueba que realiza lectura desde la colección `rutasPrueba`  |
| `app/(tabs)/firestore.tsx`          | Pantalla integrada a las pestañas que muestra `TestFirestore`              |
| `MueveloRD - Reporte.pdf`           | Documento en PDF con el reporte del proyecto hasta la fecha                |
| `MueveloRD Presentacion.pptx`       | Presentación del prototipo inicial para el jurado                          |
| `package.json`                      | Dependencias y configuración del entorno Expo y React Native               |
| `app/(tabs)/index.tsx`, `explore.tsx` | Pantallas preexistentes dentro del flujo por pestañas (`expo-router`)    |

---

## ✅ Estado actual

- [x] Proyecto creado con **Expo + React Native**
- [x] Firebase Firestore habilitado y conectado
- [x] Prueba funcional de lectura de datos (`TestFirestore`)
- [x] Documentos oficiales (PDF + PowerPoint) incluidos
- [ ] Próximo paso: implementación de autenticación (`Firebase Auth`)

---

## 👥 División de responsabilidades

- **Franibel Montero**: desarrollo de interfaz, integración de Auth
- **Ricardo Ruiz**: configuración Firebase, conexión Firestore, pruebas de lectura