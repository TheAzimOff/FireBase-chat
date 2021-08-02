import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyA_NABQgT-wKl1yoipWEv4tavxs0hkbkLQ',
  authDomain: 'chat-react-fcc5e.firebaseapp.com',
  projectId: 'chat-react-fcc5e',
  storageBucket: 'chat-react-fcc5e.appspot.com',
  messagingSenderId: '984611432740',
  appId: '1:984611432740:web:91f0d4c5d9d550159c2bb1',
  measurementId: 'G-WXXQGTMFFL',
});

export const context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <context.Provider value={[auth, firestore, firebase]}>
    <App />
  </context.Provider>,
  document.getElementById('root')
);
