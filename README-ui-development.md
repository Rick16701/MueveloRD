# MuéveloRD – Interfaz de Usuario (Branch `ui-development`)

Este branch contiene exclusivamente el desarrollo de las **pantallas principales** del prototipo inicial correspondiente al mes de abril.

---

## 🧱 Pantallas desarrolladas

Todas las pantallas fueron creadas bajo la convención `page.tsx`, siguiendo la estructura de rutas de `expo-router`.

### 🟨 Pantallas fuera de pestañas (`app/`)
- `bienvenida/page.tsx` → Pantalla de bienvenida con navegación a login o registro.
- `inicio-sesion/page.tsx` → Formulario de inicio de sesión.
- `registro/page.tsx` → Formulario de registro de nuevos usuarios.
- `perfil/page.tsx` → Información básica del usuario.

### 🟦 Pantallas dentro de tabs (`app/(tabs)/`)
- `principal/page.tsx` → Vista principal tras iniciar sesión.
- `rutas/page.tsx` → Mapa con rutas simuladas usando `react-native-maps`.
- `turismo/page.tsx` → Información turística y eventos.
- `calificacion/page.tsx` → Pantalla de simulación para calificar rutas.
- `offline/page.tsx` → Información para el modo sin conexión.
- `firestore/page.tsx` → Prueba de conexión a Firebase Firestore.

---

## 🔀 Flujo de navegación

```text
bienvenida
 ├──> inicio-sesion ─┐
 └──> registro       ├──> principal (tabs)
                     │   ├─ rutas
                     │   ├─ turismo
                     │   ├─ calificacion
                     │   └─ offline
                     └──> perfil
```

---

## ⚙️ Herramientas usadas

- **Expo Router** para navegación estructurada
- **Firebase Auth** y **Firestore** (configurado)
- **react-native-maps** para rutas simuladas
- **React Native (Expo + TypeScript)**

---

## 📌 Notas

- Todas las rutas están conectadas con `router.push('/ruta/page')` debido a que se mantiene `"typedRoutes": true`.
- Las pantallas están listas para integrar funcionalidades reales (login con Firebase, escritura en Firestore, etc.).
- Este README complementa el principal del branch `main`, sin sobrescribirlo.
