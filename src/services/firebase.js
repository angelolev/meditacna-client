import firebase from "firebase";

const config = {
  apiKey: "AIzaSyADuxl2RmAueuKZeo7m_7JNFb_6gsTL7Lg",
  authDomain: "meditacna-8ddf0.firebaseapp.com",
  databaseURL: "https://meditacna-8ddf0.firebaseio.com",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
