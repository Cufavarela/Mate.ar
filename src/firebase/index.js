import * as firebase from 'firebase/app';
import 'firebase/firestore';

 const app = firebase.initializeApp({
    apiKey: "AIzaSyD4Qgr6ZAgod-yDeoQhklI1kGk8KKWURwM",
    authDomain: "matearshop.firebaseapp.com",
    databaseURL: "https://matearshop.firebaseio.com",
    projectId: "matearshop",
    storageBucket: "matearshop.appspot.com",
    messagingSenderId: "22387026397",
    appId: "1:22387026397:web:894df106d8d0031ba12e34"
  });

export function  getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
