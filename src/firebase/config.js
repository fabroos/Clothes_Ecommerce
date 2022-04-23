// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'fabroos-ecommerce.firebaseapp.com',
  projectId: 'fabroos-ecommerce',
  storageBucket: 'fabroos-ecommerce.appspot.com',
  messagingSenderId: '236132232823',
  appId: '1:236132232823:web:d9b222a0901b2aa2112072'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
