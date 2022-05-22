import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBTfiMb_LRMck_3tizojuPs1xP-2Pv6QFU",
    authDomain: "mountain-bicycle.firebaseapp.com",
    projectId: "mountain-bicycle",
    storageBucket: "mountain-bicycle.appspot.com",
    messagingSenderId: "193133848678",
    appId: "1:193133848678:web:a6f1e92b7d73dcabdba5a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;