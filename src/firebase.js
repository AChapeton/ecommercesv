import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyD10Yf6Q0VGUGY34QtkaRBhx9aUHKw39-U',
  authDomain: 'ecommercesv-7cd2d.firebaseapp.com',
  databaseURL: 'https://ecommercesv-7cd2d.firebaseio.com',
  projectId: 'ecommercesv-7cd2d',
  storageBucket: 'ecommercesv-7cd2d.appspot.com',
  messagingSenderId: '303064854815',
  appId: '1:303064854815:web:72dba6540a3450ea4b402a',
  measurementId: 'G-0T11PMC52F',
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
