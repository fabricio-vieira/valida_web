import firebase from "firebase"
import 'firebase/auth'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBS9nQbWYCt79fkA3FjQlzdfsSzBzP31E8",
        authDomain: "valida-teste.firebaseapp.com",
        projectId: "valida-teste",
        storageBucket: "valida-teste.firebasestorage.app",
        messagingSenderId: "212996597032",
        appId: "1:212996597032:web:94fe97feb457a5c3965c1d"
        // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    })
}

export default firebase

