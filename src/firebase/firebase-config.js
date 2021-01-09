import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAxe0H9Lei2kR71iPPRX3f7QJ40txjKlBc',
  authDomain: 'react-course-e39e6.firebaseapp.com',
  projectId: 'react-course-e39e6',
  storageBucket: 'react-course-e39e6.appspot.com',
  messagingSenderId: '142840434901',
  appId: '1:142840434901:web:ee8892defbaba1a568125c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
