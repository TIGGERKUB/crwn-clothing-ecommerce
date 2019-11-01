import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDYp2oowZU_tGfwBoWm8GdjcJ89MzPr-kY",
  authDomain: "crwn-db-717f6.firebaseapp.com",
  databaseURL: "https://crwn-db-717f6.firebaseio.com",
  projectId: "crwn-db-717f6",
  storageBucket: "crwn-db-717f6.appspot.com",
  messagingSenderId: "308670511147",
  appId: "1:308670511147:web:10db5fe9326d57fd07526e",
  measurementId: "G-4Y8TS24E91"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;