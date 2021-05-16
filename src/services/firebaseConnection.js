import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyC4y2OIsJ02FsIyUtBwxcPmTtoEm1CnFfU",
    authDomain: "meuapp-632cf.firebaseapp.com",
    databaseURL: "https://meuapp-632cf-default-rtdb.firebaseio.com",
    projectId: "meuapp-632cf",
    storageBucket: "meuapp-632cf.appspot.com",
    messagingSenderId: "694504782541",
    appId: "1:694504782541:web:67460882a8d1093e9c8784",
    measurementId: "G-0B8MKX2XD0"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  

  export default firebase;