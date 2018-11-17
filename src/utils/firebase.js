import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBzPH5FtH-nbaWARxBVbXINVAZpgTzeUPs',
  authDomain: 'pwa-jakarta.firebaseapp.com',
  databaseURL: 'https://pwa-jakarta.firebaseio.com',
  projectId: 'pwa-jakarta',
  storageBucket: 'pwa-jakarta.appspot.com',
  messagingSenderId: '284832732690'
};

export default firebase.initializeApp(config);
