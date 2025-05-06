import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export async function loginConEmail(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}
