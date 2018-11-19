import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FIREBASE_CONFIG } from './constants';

firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

export {
  firebase,
  db
};
