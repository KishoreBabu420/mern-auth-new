// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJ42aGm5HlS1tk0SYw1xO0k6ESQ0y3ChM',
  authDomain: 'auth-app-408ef.firebaseapp.com',
  projectId: 'auth-app-408ef',
  storageBucket: 'auth-app-408ef.appspot.com',
  messagingSenderId: '849285168059',
  appId: '1:849285168059:web:cad6041deb05024401a29e',
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const appAuth = getAuth(App);

//Auth Providers
const provider = new GoogleAuthProvider();

export const signInWithGooglePopup = async () => {
  return await signInWithPopup(appAuth, provider);
};
