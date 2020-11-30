import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDcLa17SNS4vQdQ2mPxeL0rzO6tpAYh0t8",
    authDomain: "amazom-b4d13.firebaseapp.com",
    databaseURL: "https://amazom-b4d13.firebaseio.com",
    projectId: "amazom-b4d13",
    storageBucket: "amazom-b4d13.appspot.com",
    messagingSenderId: "1060002003184",
    appId: "1:1060002003184:web:4c00cd0a343e079b702a35",
    measurementId: "G-WVPZFT91YT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
