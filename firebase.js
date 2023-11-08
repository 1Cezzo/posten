import { initializeApp } from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCFgw5ZDtM8I_zIjScnqeHUgQy2mFYj2ag",
  authDomain: "posten-9d5a8.firebaseapp.com",
  projectId: "posten-9d5a8",
  storageBucket: "posten-9d5a8.appspot.com",
  messagingSenderId: "820555187758",
  appId: "1:820555187758:web:30121301bc96cbff8381bf",
  measurementId: "G-Z57F6BMDBW",
  databaseURL: 'https://posten-9d5a8-default-rtdb.europe-west1.firebasedatabase.app'
};

const app = initializeApp(firebaseConfig);

export default app;