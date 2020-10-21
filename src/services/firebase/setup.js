import firebase from 'firebase/app';
import 'firebase/firestore';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
  apiKey: 'AIzaSyD10Yf6Q0VGUGY34QtkaRBhx9aUHKw39-U',
  authDomain: 'ecommercesv-7cd2d.firebaseapp.com',
  databaseURL: 'https://ecommercesv-7cd2d.firebaseio.com',
  projectId: 'ecommercesv-7cd2d',
  storageBucket: 'ecommercesv-7cd2d.appspot.com',
  messagingSenderId: '303064854815',
  appId: '1:303064854815:web:72dba6540a3450ea4b402a',
  measurementId: 'G-0T11PMC52F',
};

const uiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/',
};

const fb = firebase.initializeApp(firebaseConfig);

export const auth = fb.auth();
export const db = fb.firestore();

// db.settings({
//   timestampsInSnapshots: true,
// });

export const startUI = (elementId) => {
  const ui = new firebaseui.auth.AuthUI(auth);
  ui.start(elementId, uiConfig);
};
