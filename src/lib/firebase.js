import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBqDb4-gjoE1XaWfWBt7lhBfNXw6RnjGNM',
  authDomain: 'instagram-clone-c53b1.firebaseapp.com',
  projectId: 'instagram-clone-c53b1',
  storageBucket: 'instagram-clone-c53b1.appspot.com',
  messagingSenderId: '260343939851',
  appId: '1:260343939851:web:667e37985ff332a4f1980e',
};

const firebase = Firebase.initializeApp(config);
console.log('🚀 ~ file: firebase.js ~ line 15 ~ firebase', firebase);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
