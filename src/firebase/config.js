import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDlxu1mEtybxs9N7f7U-ZF6I3XrvuBTm3Q',
  authDomain: 'journal-app-react-6a35c.firebaseapp.com',
  projectId: 'journal-app-react-6a35c',
  storageBucket: 'journal-app-react-6a35c.firebasestorage.app',
  messagingSenderId: '319580322363',
  appId: '1:319580322363:web:537397e8f2bb002f0f7a1e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);

console.log(FirebaseAuth.currentUser);
