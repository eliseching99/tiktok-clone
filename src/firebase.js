
// import * as firebase from "firebase/app";
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDG8ppLDlZUNFnl7y2AxCzWT35Btv2g7oM",
    authDomain: "react-learning-4fc3f.firebaseapp.com",
    databaseURL: "https://react-learning-4fc3f.firebaseio.com",
    projectId: "react-learning-4fc3f",
    storageBucket: "react-learning-4fc3f.appspot.com",
    messagingSenderId: "43206398425",
    appId: "1:43206398425:web:59965eb16e5470c72b89c8",
    measurementId: "G-9EPKXQ4PJP"
  };

const firebaseApp=
firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export default db;

