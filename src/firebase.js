import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmHfOHgVb3tUoV6NUqQmqOSXJaSFANM2g",
  authDomain: "linkedin-clone-yt-12b8c.firebaseapp.com",
  projectId: "linkedin-clone-yt-12b8c",
  storageBucket: "linkedin-clone-yt-12b8c.appspot.com",
  messagingSenderId: "75670238834",
  appId: "1:75670238834:web:049de6e256e835972974eb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
