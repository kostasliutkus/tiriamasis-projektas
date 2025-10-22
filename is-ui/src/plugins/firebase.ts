import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Parse allowed emails from environment variable
export const ALLOWED_EMAILS = import.meta.env.VITE_ALLOWED_EMAILS
  ? import.meta.env.VITE_ALLOWED_EMAILS.split(',').map((email: string) => email.trim())
  : []

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
