import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDE5Jw52Ys4uQlbK0i73krAr-20Ep9yweI",
  authDomain: "burger-app-75e1d.firebaseapp.com",
  databaseURL:
    "https://burger-app-75e1d-default-rtdb.europe-west1.firebasedatabase.app",
  measurementId: "G-YGFGNDH8X0",
});

const base = Rebase.createClass(firebaseApp.database());
export { firebaseApp };
export default base;
