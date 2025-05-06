# README - Branch: auth-development

Este README documenta los avances realizados en el branch `auth-development` del proyecto **MuéveloRD**, centrado exclusivamente en la implementación del sistema de autenticación con Firebase Auth, así como la protección de rutas privadas.

## 📊 Objetivo del Branch

Implementar el flujo completo de autenticación de usuarios en la aplicación MuéveloRD utilizando **Firebase Authentication** con **correo y contraseña**, integrando:

* Registro de nuevos usuarios.
* Inicio de sesión.
* Redirección según sesión activa.
* Protección de rutas/tablas privadas (Tabs).

---

## 📄 Archivos y Componentes Agregados/Modificados

### 🔍 Hook personalizado: `useProtectedRoute`

* Ruta: `hooks/auth/useProtectedRoute.ts`
* Funcionalidad: redirige automáticamente a `/inicio-sesion/page` si no hay sesión activa.
* Usado dentro de `(tabs)/_layout.tsx` para proteger todas las pantallas principales.

---

### 🔐 Inicio de sesión

* Ruta: `app/inicio-sesion/page.tsx`
* Componente que permite a un usuario autenticarse.
* Integrado con Firebase Auth.
* Llama a la función `loginConEmail()` para validar credenciales.

```ts
const resultado = await loginConEmail(correo, contrasena);
```

---

### 📅 Registro de usuarios

* Ruta: `app/registro/page.tsx`
* Componente que permite registrar nuevos usuarios.
* Guarda la información básica del usuario en Firestore usando `setDoc`.

---

### 🔹 Funciones Auxiliares Firebase

* Archivo: `firebase/auth/loginConEmail.ts`
* Archivo: `firebase/auth/registerConEmail.ts`
* Separamos las funciones de auth para mantener el código modular y reutilizable.

---

## 📁 Estructura del flujo actual

1. **Registro**: Usuario se registra en `/registro/page`, se guarda en Firebase y se redirige a `(tabs)/principal/page`
2. **Login**: Usuario entra por `/inicio-sesion/page`, se valida y se redirige igual.
3. **Protección**: Si el usuario intenta acceder a tabs sin sesión, `useProtectedRoute()` lo envía de vuelta al login.

---

## ✅ Dependencias utilizadas

* `firebase`
* `expo-router`
* `expo` (v53)

---

## 📊 Estado Final del Branch

* [x] Login funcional con Firebase Auth
* [x] Registro funcional y almacenamiento en Firestore
* [x] Redirecciones post-login y post-registro
* [x] Hook de protección de rutas funcionando en tabs
* [x] Archivos desacoplados y estructurados por funcionalidades

---

## 📒 Próximos pasos

* Mostrar datos del usuario logueado en la pantalla de perfil
* Implementar cierre de sesión
* Agregar validaciones visuales (correo inválido, campos vacíos, etc)
* Manejo de errores más detallado por tipo
