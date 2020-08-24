import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyApu1hOOrmVm0fJf-1yqhpmVQ2HNXl5J08",
  authDomain: "clone-bdc6b.firebaseapp.com",
  databaseURL: "https://clone-bdc6b.firebaseio.com",
  projectId: "clone-bdc6b",
  storageBucket: "clone-bdc6b.appspot.com",
  messagingSenderId: "253336207725",
  appId: "1:253336207725:web:65224427101cf48762da64",
  measurementId: "G-4R8KLBE3NL",
});

// const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// const storage = firebaseApp.storage();

export { auth };
