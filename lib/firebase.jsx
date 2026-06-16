// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
// import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



// import { initializeAuth, getReactNativePersistence } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7O5tlTumA9qAsbyLPBAIBivoD9rtNnrE",
  authDomain: "test-app-8fbcb.firebaseapp.com",
  projectId: "test-app-8fbcb",
  storageBucket: "test-app-8fbcb.firebasestorage.app",
  messagingSenderId: "1069888430239",
  appId: "1:1069888430239:web:42dfcfe9e761ebc8f1c2aa",
  measurementId: "G-JE5E3GKNC5"
};



// Initialize Firebase

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),

})