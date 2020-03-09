import * as firebase from 'firebase';
import { toast } from './toast';

const config = {
  apiKey: 'AIzaSyCB1H-inwHW8hu3Wmef1YL4fR3IYj_l4cc',
  authDomain: 'bingle-backend.firebaseapp.com',
  databaseURL: 'https://bingle-backend.firebaseio.com',
  projectId: 'bingle-backend',
  storageBucket: 'bingle-backend.appspot.com',
  messagingSenderId: '881260489432',
  appId: '1:881260489432:web:a088697c5f5504855c05ad',
  measurementId: 'G-54FTGQELKZ'
};

firebase.initializeApp(config);

export async function loginUser(username: string, password: string) {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(username, password);
    console.log(res);
    return true;
  } catch (error) {
    toast(error.message);
    return false;
  }
}

export async function registerUser(username: string, password: string) {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(username, password);
    console.log(res);
    return true;
  } catch (error) {
    toast(error.message);
    return false;
  }
}
