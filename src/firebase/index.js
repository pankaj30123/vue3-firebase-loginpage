import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDHkBA9LIPZWMXuKEEUFzXgeWCls-4ND4",
  authDomain: "myloginpage-e413d.firebaseapp.com",
  projectId: "myloginpage-e413d",
  storageBucket: "myloginpage-e413d.appspot.com",
  messagingSenderId: "809449338622",
  appId: "1:809449338622:web:6446b2837f29d09f2e57af",
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
