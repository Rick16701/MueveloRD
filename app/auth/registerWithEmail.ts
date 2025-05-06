import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export async function registerWithEmail(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}
