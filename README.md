# 📱 MuéveloRD – Prototipo Inicial

Este repositorio contiene el desarrollo del prototipo inicial de la aplicación **MuéveloRD**, una app de movilidad urbana y turística en la República Dominicana, como parte del proyecto de grado de Ingeniería en Sistemas (PUCMM).

---

## 📂 Estructura del repositorio

| Archivo / Carpeta                   | Descripción                                                               |
| ----------------------------------- | ------------------------------------------------------------------------- |
| `firebaseConfig.js`                 | Configuración de Firebase (Auth y Firestore inicializados)                |
| `TestFirestore.js`                  | Componente de prueba que realiza lectura desde la colección `rutasPrueba` |
| `app/(tabs)/firestore.tsx`          | Pantalla integrada a las pestañas que muestra `TestFirestore`             |
| `app/(auth)/inicio-sesion/page.tsx` | Pantalla para login usando Firebase Auth                                  |
| `app/(auth)/registro/page.tsx`      | Pantalla de registro con escritura en Firestore                           |
| `hooks/useProtectedRoute.ts`        | Hook para proteger rutas privadas según sesión iniciada                   |
| `app/(tabs)/_layout.tsx`            | Integración del hook `useProtectedRoute` en todo el stack de navegación   |
| `README.auth.md`                    | Documentación específica del branch `auth-development`                    |
| `README.ui.md`                      | Documentación específica del branch `ui-development`                      |
| `MueveloRD - Reporte.pdf`           | Documento oficial del proyecto (reporte)                                  |
| `MueveloRD Presentacion.pptx`       | Presentación del prototipo inicial para el jurado                         |
| `package.json`                      | Dependencias y configuración del entorno Expo y React Native              |

---

## ✅ Estado actual

* [x] Proyecto creado con **Expo + React Native**
* [x] Firebase Firestore habilitado y conectado
* [x] Prueba funcional de lectura de datos (`TestFirestore`)
* [x] Registro y login de usuarios implementado con `Firebase Auth`
* [x] Protección de rutas privadas mediante sesión iniciada (`useProtectedRoute`)
* [x] Documentación separada por branch (`ui-development`, `auth-development`)
* [x] Documentos oficiales (PDF + PowerPoint) incluidos

---

## 🛠️ Branches trabajados

### 🔹 `ui-development`

* Se desarrolló el flujo visual completo de las pantallas base: Bienvenida, Inicio de Sesión, Registro, y Navegación Principal (`tabs`).
* Implementación de navegación con `expo-router` y organización modular por pantallas.

### 🔹 `auth-development`

* Se implementó login y registro con Firebase Authentication.
* Se guarda el usuario registrado en Firestore.
* Se creó el hook `useProtectedRoute` para proteger todas las rutas privadas.
* Se documentó el flujo en `README.auth.md`.

---

## 📌 Próximas tareas – Paso 2: Diseño de la Interfaz (Wireframes y Layouts)

| Tarea                                                | Responsable      | Estado      |
| ---------------------------------------------------- | ---------------- | ----------- |
| 5. Diseñar wireframes en Figma o a mano              | Franibel Montero | 🔄 En curso |
| 6. Crear componentes base en React Native            | Ricardo Ruiz     | ⏳ Próximo   |
| 7. Implementar diseño de bienvenida y login visuales | Franibel Montero | ⏳ Próximo   |
| 8. Implementar pantalla de menú principal visual     | Ricardo Ruiz     | ⏳ Próximo   |

🔔 Todo lo trabajado hasta ahora en el paso 2 ha sido realizado por **Ricardo Ruiz**, y próximamente **Franibel Montero** comenzará la implementación visual de pantallas según los mockups.

---

## 👥 División de responsabilidades

* **Franibel Montero**: diseño visual (wireframes, estilos), futura implementación de pantallas.
* **Ricardo Ruiz**: desarrollo funcional de pantallas, integración Firebase, control de rutas, commits y documentación.
