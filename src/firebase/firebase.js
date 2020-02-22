import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyDTHtZWI3c2A1tq3BaiUwB7LaKTd7ESrzo',
  authDomain: 'winter-2020-notes.firebaseapp.com',
  databaseURL: 'https://winter-2020-notes.firebaseio.com',
  projectId: 'winter-2020-notes',
  storageBucket: 'winter-2020-notes.appspot.com',
  messagingSenderId: '315906567955',
  appId: '1:315906567955:web:6626e89ff45650132434e6'
});

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
