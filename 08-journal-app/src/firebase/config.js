
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import {getEnvironments} from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//
const  {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// console.log(process.env);
// console.log( import.meta.env );

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB9vaGf6qR1CMRAqaFYRGW__HNpMFGR18k",
//   authDomain: "react-3a1f8.firebaseapp.com",
//   projectId: "react-3a1f8",
//   storageBucket: "react-3a1f8.appspot.com",
//   messagingSenderId: "103574286196",
//   appId: "1:103574286196:web:6a619ae3273d83ac830621"
// };

//Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyAFtPd-f-AnIYcvd35OBBt_IUg0NBjV93k",
//   authDomain: "react-dev-b936e.firebaseapp.com",
//   projectId: "react-dev-b936e",
//   storageBucket: "react-dev-b936e.appspot.com",
//   messagingSenderId: "492216419756",
//   appId: "1:492216419756:web:bcf9d07611babaa20aa609"
// };

 const firebaseConfig = {
   apiKey: VITE_APIKEY,
   authDomain: VITE_AUTHDOMAIN,
   projectId: VITE_PROJECTID,
   storageBucket: VITE_STORAGEBUCKET,
   messagingSenderId: VITE_MESSSAGINGSENDERID,
   appId: VITE_APPID
 };

// console.log( firebaseConfig );
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
