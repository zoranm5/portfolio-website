// auth.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAC0yqfl_GYNHo3dHzz6osOL9jhG2tIpgQ",
    authDomain: "portfolio-website-f0d70.firebaseapp.com",
    projectId: "portfolio-website-f0d70",
    storageBucket: "portfolio-website-f0d70.appspot.com",
    messagingSenderId: "902751992770",
    appId: "1:902751992770:web:aa52bc6f9b4c40aa0f345b",
    measurementId: "G-4T21Y6PT0Z"
};

// Inicijaliziraj Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('login-button').addEventListener('click', function() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log('User signed in:', result.user);
            // Preusmjeri na index.html nakon uspješnog logiranja
    
        })
        .catch((error) => {
            console.error('Error during sign-in:', error);
        });
});
document.getElementById('logout-button').addEventListener('click', function() {
    auth.signOut().then(() => {
        console.log('User signed out');
        // Sakrij gumb za odjavu
        document.getElementById('logout-button').style.display = 'none';
    }).catch((error) => {
        console.error('Error during sign-out:', error);
    });
});