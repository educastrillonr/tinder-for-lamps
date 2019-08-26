import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCb4KHRH7ALk2sLFdwOQGzHaeZZSHxY0SI",
  authDomain: "tinder-for-lamps.firebaseapp.com",
  databaseURL: "https://tinder-for-lamps.firebaseio.com",
  projectId: "tinder-for-lamps",
  storageBucket: "tinder-for-lamps.appspot.com",
  messagingSenderId: "240405345489",
  appId: "1:240405345489:web:0b43fc67022036a6"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const storage = firebase.storage();

export default firebase;
