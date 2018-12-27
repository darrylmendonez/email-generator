import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD7aIPR-8wa1yB0e_xB_ugghuN4Xjg36RU",
  authDomain: "email-generator-db.firebaseapp.com",
  databaseURL: "https://email-generator-db.firebaseio.com",
  projectId: "email-generator-db",
  storageBucket: "email-generator-db.appspot.com",
  messagingSenderId: "199189499975"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;