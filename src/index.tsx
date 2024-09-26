import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { SpeedInsights } from '@vercel/speed-insights/react';


const firebaseConfig = {
  apiKey: "AIzaSyChhr07kd1tv_kl5nYTMBachF_QUkmoVA4",
  authDomain: "careerai-385fe.firebaseapp.com",
  projectId: "careerai-385fe",
  storageBucket: "careerai-385fe.appspot.com",
  messagingSenderId: "893056502664",
  appId: "1:893056502664:web:788b42337be06a1dce883d",
  measurementId: "G-D5PD3BY0PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
const auth = getAuth();
console.log(auth);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SpeedInsights />
    <App />
  </React.StrictMode>
)
