import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBBcJBQXvc4r8MGPWB_qKpUYv80pLRjtXU",
  authDomain: "netflix-clone-949b4.firebaseapp.com",
  projectId: "netflix-clone-949b4",
  storageBucket: "netflix-clone-949b4.appspot.com",
  messagingSenderId: "57951942627",
  appId: "1:57951942627:web:cb35949aba0fa1d7f512d6",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
