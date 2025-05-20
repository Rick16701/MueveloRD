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
| `README.figma-wireframes.md`        | Documentación del branch con mockups y link de Figma                      |
| `README.visual-layout-implementation.md` | Documentación del branch con implementación visual de pantallas   |
| `README.componentes-base.md`        | Documentación del branch `componentes-base` con todos los componentes UI  |
| `MueveloRD - Reporte.pdf`           | Documento oficial del proyecto (reporte)                                  |
| `MueveloRD Presentacion.pptx`       | Presentación del prototipo inicial para el jurado                         |
| `package.json`                      | Dependencias y configuración del entorno Expo y React Native              |

---

## ✅ Estado actual

* [x] Proyecto creado con **Expo + React Native**
* [x] Firebase Firestore habilitado y conectado
* [x] Registro y login funcionales con Firebase Auth
* [x] Protección de rutas privadas mediante sesión iniciada (`useProtectedRoute`)
* [x] Prueba funcional de lectura de datos desde Firestore
* [x] Mockups en Figma finalizados y subidos (branch `figma-wireframes`)
* [x] Implementación visual iniciada (branch `visual-layout-implementation`)
* [x] Componentes base reutilizables implementados (branch `componentes-base`)
* [x] Documentación completa por branch (`auth`, `ui`, `figma`, `visual-layout`, `componentes-base`)

---

## 🛠️ Branches trabajados

| Branch                      | Descripción                                                                 |
|----------------------------|------------------------------------------------------------------------------|
| `main`                     | Versión estable y documentación oficial                                      |
| `ui-development`           | Desarrollo de pantallas base del prototipo inicial                           |
| `auth-development`         | Flujo completo de autenticación (login, registro, protección de rutas)       |
| `figma-wireframes`         | Mockups entregados por Franibel y enlace a Figma                             |
| `visual-layout-implementation` | Implementación visual de pantallas con base en los diseños de Figma       |
| `componentes-base`         | Componentes reutilizables en React Native para navegación e interfaz visual |

---

## 📌 Paso 2 – Diseño de la Interfaz (Wireframes y Layouts)

| Tarea                                                                  | Responsable         | Estado     |
|------------------------------------------------------------------------|---------------------|------------|
| 5. Diseñar wireframes en Figma o a mano                                | Franibel Montero    | ✅ Listo    |
| 6. Crear componentes base en React Native                              | Ricardo Ruiz        | ✅ Listo    |
| 7. Implementar diseño de bienvenida y login visuales                   | Franibel Montero    | 🔄 En curso |
| 8. Implementar pantalla de menú principal visual                       | Ricardo Ruiz        | ⏳ Próximo  |
| 9. Implementar pantallas restantes (calificación, offline, turismo…)   | Franibel Montero    | ⏳ Próximo  |

---

## 👥 División de responsabilidades

| Persona             | Rol                                                                 |
|---------------------|----------------------------------------------------------------------|
| Franibel Montero    | Diseño visual, creación de mockups y pantallas visuales              |
| Ricardo Ruiz        | Funcionalidad, integración Firebase, navegación, documentación       |
