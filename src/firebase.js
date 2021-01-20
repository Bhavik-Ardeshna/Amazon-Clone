// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCg5h6n7hUkayT4OI7R0PZmkDy-7D_tu3A",
    authDomain: "clone-dc2bf.firebaseapp.com",
    databaseURL: "https://clone-dc2bf.firebaseio.com",
    projectId: "clone-dc2bf",
    storageBucket: "clone-dc2bf.appspot.com",
    messagingSenderId: "796261854471",
    appId: "1:796261854471:web:b5141b8ae9bc5bfbf629a2",
    measurementId: "G-44TVX3PVH6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth, db };
