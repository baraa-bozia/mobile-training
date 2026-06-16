import { createContext, useEffect, useState } from "react";
import {auth} from "../lib/firebase";
import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import firebase from "firebase/compat/app";
import { ToastAndroid } from "react-native";
import { navigate } from "expo-router/build/global-state/routing";
import { onAuthStateChanged } from "firebase/auth";

// the box 
export const UserContext = createContext();

// the one who fills the box with data(provider)
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
const [authChecked, setAuthChecked] = useState(false);
        async function login(email, password) {
            try {
                const res =await signInWithEmailAndPassword(auth, email, password);
                setUser(res.user);
                // const userCredential = await signInWithEmailAndPassword(auth, email, password);
                // setUser(userCredential.user);
                console.log("Login successful");
                ToastAndroid.show("Login successful", ToastAndroid.SHORT);
                navigate("/profile");
            } catch (error) {
                // console.error("Login error:", error);
                throw Error(error.message);
            }
        }
        async function register(email, password) {
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password);
                setUser(res.user);
                console.log("Registration successful");
            } catch (error) {
                console.error("Registration error:", error);
            }
        }
        async function logout() {
            try {
                await signOut(auth);
                setUser(null);
                console.log("Logout successful");
                ToastAndroid.show("Logout successful", ToastAndroid.SHORT);
                navigate("/login");
            } catch (error) {
                console.error("Logout error:", error);
            }
        }

      useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setAuthChecked(true);
    });

    return unsubscribe;
}, []);

return (
    <UserContext.Provider value={{ user,authChecked, login, register, logout }}>
        {children}
    </UserContext.Provider>
);
};  