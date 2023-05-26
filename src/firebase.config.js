import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBERfLauT3qI6Hp9GmnHfISwF-hB9sV4as",
    authDomain: "weblag-8f20b.firebaseapp.com",
    databaseURL: "https://weblag-8f20b-default-rtdb.firebaseio.com",
    projectId: "weblag-8f20b",
    storageBucket: "weblag-8f20b.appspot.com",
    messagingSenderId: "595073000286",
    appId: "1:595073000286:web:776c7ced7dc88cfa5725cf",
    measurementId: "G-923B668C70"
  };

  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage};