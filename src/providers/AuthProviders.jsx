import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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