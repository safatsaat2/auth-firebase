import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


 export  const AuthContext = createContext(null);

 const auth = getAuth(app)

const AuthProviders = ({children}) => {

        const [user, setUser] =  useState(null)

        const createUser = (email, pass) => {
            return createUserWithEmailAndPassword(auth, email, pass)
        }
        const signIn = (email, pass) => {
            return signInWithEmailAndPassword(auth, email, pass)
        }

        useEffect(() => {
           const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                console.log("auth state", currentUser)
                setUser(currentUser)
            });

            return(( )=> {
                unSubscribe();
            })

        }, [])

    const AuthInfo = {
        user,
        createUser,
        signIn
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;