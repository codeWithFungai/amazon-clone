import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBEv6KYBgNbA_PosV1fksmbs02nsnL7VNU",
    authDomain: "clone-d9801.firebaseapp.com",
    projectId: "clone-d9801",
    storageBucket: "clone-d9801.appspot.com",
    messagingSenderId: "767609573466",
    appId: "1:767609573466:web:c5430cbd0d23b6f1bd4863",
    measurementId: "G-SDD9M6557B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };