import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCBGz6RrtJ9IO4c2yplaIHddEvOfGsczDg',
  authDomain: 'chat-web-app-e600c.firebaseapp.com',
  projectId: 'chat-web-app-e600c',
  storageBucket: 'chat-web-app-e600c.appspot.com',
  messagingSenderId: '932342104365',
  appId: '1:932342104365:web:1784586d0b0c7f876a53a4',
  databaseURL:
    'https://chat-web-app-e600c-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
