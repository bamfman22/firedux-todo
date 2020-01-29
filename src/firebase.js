import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAaMMH_c5Az4533vMaH5lzzcBtdlvtWn5w",
  authDomain: "firedux-todo-a54a2.firebaseapp.com",
  databaseURL: "https://firedux-todo-a54a2.firebaseio.com",
  projectId: "firedux-todo-a54a2",
  storageBucket: "firedux-todo-a54a2.appspot.com",
  messagingSenderId: "960579379878",
  appId: "1:960579379878:web:eaf5af738d76d0d8334a67",
  measurementId: "G-733BT71N0C"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")