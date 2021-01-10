import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase";
import "firebase/storage";

const config = {
  // apiKey: YOUR_API_KEY,
  // authDomain: YOUR_AUTH_DOMAIN,
  // databaseURL: YOUR_DATABASE_URL,
  // projectId: YOUR_PROJECT_ID,
  // storageBucket: '',
  // messagingSenderId: YOUR_MESSAGING_SENDER_ID,
  apiKey: "AIzaSyDm5bO5HeO0Vnl5eUueqYZOSfic4o48cC4",
  authDomain: "uni-verse-scedemo.firebaseapp.com",
  projectId: "uni-verse-scedemo",
  storageBucket: "uni-verse-scedemo.appspot.com",
  messagingSenderId: "1085241479794",
  appId: "1:1085241479794:web:530968a5c736478893e8eb",
  measurementId: "G-ZQ9MP8XRPZ"
};

app.initializeApp(config);
const storage = app.storage();

class Firebase {
  constructor() {
    // app.initializeApp(config);
    this.auth = app.auth();
    // storage = app.storage();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // doSignOut = () => this.auth.signOut();

  // doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  // doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export function doSignOut() {
  app.auth().signOut();
}

export function writeUserInformation(ref, obj) {
  firebase
    .database()
    .ref(ref)
    .set(obj);
}
// export default Firebase;
export { storage, Firebase as default };
