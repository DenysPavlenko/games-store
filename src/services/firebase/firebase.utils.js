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
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });


export const createUserProfileDocument = async (userAuth, additionaData) => {
  if (!userAuth) { return; }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        avatar: photoURL,
        ...additionaData
      });
    }
    catch (error) {
      return error;
    }
  }
  return userRef;
};

export const addPurcaseToUserHistory = async (items, userId) => {
  const userRef = firestore.doc(`users/${userId}`);
  const snapShot = await userRef.get();
  if (snapShot.exists) {
    console.log('items:', items)
    try {
      await userRef.update({
        purchaseHistory: firebase.firestore.FieldValue.arrayUnion(...items)
      });
    }
    catch (error) {
      return error;
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }), reject);
  });
}

export default firebase;
