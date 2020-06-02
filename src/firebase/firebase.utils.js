import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBKuI-Y_P2g5kf_FOxXiI940Lo57YFVoMk",
  authDomain: "games-store-cde54.firebaseapp.com",
  databaseURL: "https://games-store-cde54.firebaseio.com",
  projectId: "games-store-cde54",
  storageBucket: "games-store-cde54.appspot.com",
  messagingSenderId: "1095168939262",
  appId: "1:1095168939262:web:996601fcaed5e10a1081af",
  measurementId: "G-ETD2TYG08K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
