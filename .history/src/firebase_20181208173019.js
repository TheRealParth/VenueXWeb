import memoize from 'memoizee';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/functions';

export default memoize(() => {
  firebase.initializeApp({
    apiKey: 'AIzaSyDbULyOjlTP2uL2IVYIj4NhE9CjvCzX4AU',
    authDomain: 'venuex-dreamstack.firebaseapp.com',
    databaseURL: 'https://venuex-dreamstack.firebaseio.com',
    projectId: 'venuex-dreamstack',
    storageBucket: 'venuex-dreamstack.appspot.com',
    messagingSenderId: '1091768111084'
  });
  return firebase;
});
