import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9NBGgCQNTcCeagvCoO1GS1QM2BE8KZ7k",
  authDomain: "tabel-periodic.firebaseapp.com",
  databaseURL:
    "https://tabel-periodic-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tabel-periodic",
  storageBucket: "tabel-periodic.appspot.com",
  messagingSenderId: "391430727013",
  appId: "1:391430727013:web:552d5788757f7222fe6d8c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

class Auth {
  constructor() {
    this.container = document.querySelector(".container");
  }
  Login() {
    signInWithPopup(auth, provider)
      .catch((error) => {
        alert(error)
      });
  }
  init() {
    auth.onAuthStateChanged((user) => {
      if (user) {
      } else {
        let confirms = confirm("Anda belum login, Login sekarang?");
        if (confirms) {
          this.Login();
        }
      }
    });
  }
}

window.addEventListener("load", () => {
  const authentication = new Auth();
  authentication.init();
});
