import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { firebase } from '@firebase/app'


require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyBJ7NYERxorbd2U6RCTW8dAUY2jH67Z6Vw",
  authDomain: "evernote-clone-ef943.firebaseapp.com",
  projectId: "evernote-clone-ef943",
  storageBucket: "evernote-clone-ef943.appspot.com",
  messagingSenderId: "153203045223",
  appId: "1:153203045223:web:3fbd1e48a78e7ecd7d35c2",
  measurementId: "G-XZBRGB43T6"
});


ReactDOM.render(
  
    <App />,
  
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
