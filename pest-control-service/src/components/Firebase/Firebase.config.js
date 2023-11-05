
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkvF2FmbP5Fp0J6CqMKt_oJEyZPv09SC8",
  authDomain: "pest-control-a59a3.firebaseapp.com",
  projectId: "pest-control-a59a3",
  storageBucket: "pest-control-a59a3.appspot.com",
  messagingSenderId: "689577935385",
  appId: "1:689577935385:web:fd282af79783f26308a088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;