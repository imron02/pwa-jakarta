const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBzPH5FtH-nbaWARxBVbXINVAZpgTzeUPs',
  authDomain: 'pwa-jakarta.firebaseapp.com',
  databaseURL: 'https://pwa-jakarta.firebaseio.com',
  projectId: 'pwa-jakarta',
  storageBucket: 'pwa-jakarta.appspot.com',
  messagingSenderId: '284832732690'
};
const SECRET_KEY = 'pw4-j4k4rt4-s3cr3t';
const SECRET_AUTH = 'NMWk70BR+6zuyw3NWi8uijU2jdACuEsA+kjvTaI0TXgx1e7o95cSyP1jKcKsHex5';
const ERROR_CODE = {
  'auth/user-not-found': 'auth/user-not-found'
};
const RESPONSE_CODE = {
  success: 'success'
};
const REDUX = {
  REQUEST_MUSEUM: 'REQUEST_MUSEUM',
  REQUEST_MUSEUM_SUCCESS: 'REQUEST_MUSEUM_SUCCESS',
  REQUEST_MUSEUM_FAILED: 'REQUEST_MUSEUM_FAILED'
};
const MENU = {
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  MUSEUM: '/museum'
};

export {
  FIREBASE_CONFIG,
  SECRET_KEY,
  ERROR_CODE,
  REDUX,
  MENU,
  SECRET_AUTH,
  RESPONSE_CODE
};
