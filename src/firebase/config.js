// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAp1waoSeo_vN24NK604eEeNCp05JOR5TQ",
authDomain: "chocolatesros-4a4d9.firebaseapp.com",
projectId: "chocolatesros-4a4d9",
storageBucket: "chocolatesros-4a4d9.appspot.com",
messagingSenderId: "774596281507",
appId: "1:774596281507:web:8754711d14bfa4a3f7eb16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);