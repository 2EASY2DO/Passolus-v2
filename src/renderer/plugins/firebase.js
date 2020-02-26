// ~/plugins/firebase.js

import { firebase } from '@firebase/app';
import "@firebase/firestore";
import VueFirestore from 'vue-firestore'
import Vue from 'vue';

Vue.use(VueFirestore)

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB-cpK86OSXQ9xSWJ3mCklbOaJmImS1C2g",
  authDomain: "passolus-1581565928225.firebaseapp.com",
  databaseURL: "https://passolus-1581565928225.firebaseio.com",
  projectId: "passolus-1581565928225",
  storageBucket: "passolus-1581565928225.appspot.com",
  messagingSenderId: "751246010364",
  appId: "1:751246010364:web:fbdb66e943adb3ecd3b479",
  measurementId: "G-PQ50G024J2"
});

export const db = firebaseApp.firestore()
