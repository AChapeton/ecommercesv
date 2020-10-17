import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import * as firebase from 'firebase';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
