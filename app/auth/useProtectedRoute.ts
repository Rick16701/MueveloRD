import { useEffect } from 'react';
import { auth } from '../../firebaseConfig';
import { router } from 'expo-router';

export function useProtectedRoute() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.replace('/inicio-sesion/page'); // Redirige al login si no hay usuario
      }
    });

    return unsubscribe;
  }, []);
}
