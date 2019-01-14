import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore'; // 👈 If you're using firestore
import ReduxSagaFirebase from 'redux-saga-firebase';

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDbULyOjlTP2uL2IVYIj4NhE9CjvCzX4AU',
  authDomain: 'venuex-dreamstack.firebaseapp.com',
  databaseURL: 'https://venuex-dreamstack.firebaseio.com',
  projectId: 'venuex-dreamstack',
  storageBucket: 'venuex-dreamstack.appspot.com',
  messagingSenderId: '1091768111084'
});

const rsf = new ReduxSagaFirebase(firebaseApp);
export default rsf;
