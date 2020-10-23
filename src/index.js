import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAXOtaIIMfjaDoDR6MbLEaMCYwH33-xI_o",
  authDomain: "rowanweb-2ce44.firebaseapp.com",
  databaseURL: "https://rowanweb-2ce44.firebaseio.com",
  projectId: "rowanweb-2ce44",
  storageBucket: "rowanweb-2ce44.appspot.com",
  messagingSenderId: "978853597115",
  appId: "1:978853597115:web:9e8f3680ea6f0d74917e9e",
  measurementId: "G-L7R0J8D3MZ"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
