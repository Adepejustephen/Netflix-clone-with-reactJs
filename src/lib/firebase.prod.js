// import firebase from 'firebase/app'
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBB5dCzcM-s-8aYI_qPvxyKHlmjgpj3l9o",
    authDomain: "netflix-clone-ife.firebaseapp.com",
    projectId: "netflix-clone-ife",
    storageBucket: "netflix-clone-ife.appspot.com",
    messagingSenderId: "686019292785",
    appId: "1:686019292785:web:1d5d0c4b08989070d275d0",
    measurementId: "G-9G3VEPP06N"
};

const app= initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app;