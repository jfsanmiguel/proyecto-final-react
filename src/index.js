import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Cwi8byyUAPWqivpvDgLt53MW7hNyE6k",
  authDomain: "proyectofinalreact-a9ed5.firebaseapp.com",
  projectId: "proyectofinalreact-a9ed5",
  storageBucket: "proyectofinalreact-a9ed5.appspot.com",
  messagingSenderId: "437649733124",
  appId: "1:437649733124:web:562da5512e491b9ce5e751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
