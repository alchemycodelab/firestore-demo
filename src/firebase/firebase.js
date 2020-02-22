import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp();

export const app = firebase;
export const firestore = app.firestore();

// collections go here
export const notesCollection = firestore.collection('notes');

export const auth = app.auth();
export const loginMethod = auth.signInWithPopup;
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const loginWithProvider = () => {
  return firebase.auth().signInWithPopup(googleProvider);
};

export const subscribe = (fn, noUserFn) => firebase.auth().onAuthStateChanged(user => {
  if(user) {
    fn(user);
  } else {
    noUserFn && noUserFn();
  }
});

export const signOut = () => firebase.auth().signOut();
