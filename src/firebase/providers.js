import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

export async function registerProvider(email, password, displayName) {
  try {
    const { user } = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid: user.uid,
      displayName,
      email,
      photoURL: user.photoURL,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
}

export async function loginProvider(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(FirebaseAuth, email, password);

    return {
      ok: true,
      uid: user.uid,
      displayName: user.displayName,
      email,
      photoURL: user.photoURL,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
}

export async function logoutProvider() {
  try {
    await signOut(FirebaseAuth);
  } catch (error) {
    console.warn(error.message);
  }
}
