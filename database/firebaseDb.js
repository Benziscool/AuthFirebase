import * as firebase from 'firebase';
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyB6uLvivorxxQiSW9fZoUz-UaPH3pgMUPs",
    authDomain: "fir-auth-49ca7.firebaseapp.com",
    projectId: "fir-auth-49ca7",
    storageBucket: "fir-auth-49ca7.appspot.com",
    messagingSenderId: "1009135717367",
    appId: "1:1009135717367:web:323ec2cfb382fe32f5bcf2"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.firestore();

 export default firebase;