// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Importando o Firestore
import { getAuth } from 'firebase/auth'; // Importando o Auth

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDEiwhgWT8ek11l0wr_zi3NnTpbZmPk1eQ",
    authDomain: "instagram-clone-curso-f4eb6.firebaseapp.com",
    projectId: "instagram-clone-curso-f4eb6",
    storageBucket: "instagram-clone-curso-f4eb6.appspot.com",
    messagingSenderId: "562834434596",
    appId: "1:562834434596:web:29e49ada70939d069286b1",
    measurementId: "G-NCBSN6YMSP"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando o Firestore e o Auth
const db = getFirestore(app); // Inicializando Firestore
const auth = getAuth(app); // Inicializando Auth

// Exportando db e auth para uso em outros arquivos
export { db, auth };
