import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrahVrjmK4WYzBYWlGaNqEGxC39BEA9EA",
  authDomain: "lamps-402bd.firebaseapp.com",
  databaseURL: "https://lamps-402bd.firebaseio.com",
  projectId: "lamps-402bd",
  storageBucket: "lamps-402bd.appspot.com",
  messagingSenderId: "347744280587",
  appId: "1:347744280587:web:a2312a9ab9c8ea84"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const storage = firebase.storage();

export default firebase;
