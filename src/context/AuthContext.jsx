
import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {
    createUserWithEmailAndPassword ,
     signInWithEmailAndPassword, 
     signOut , 
     onAuthStateChanged
} from 'firebase/auth'
import { auth, db } from '../services/firebse'
import {doc, setDoc} from 'firebase/firestore'

// const { createContext } = require("react");
const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [user, setUser]= useState({});

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        }) 
        return ()=>{
            unsubscribe();
        }
    },[])

    function signUp(email,password){
        createUserWithEmailAndPassword(auth , email, password);
        // for creating database in firestore
        setDoc(doc(db,'users',email),{ 
            favShows:[],
        });
    }

    function logIn(email, password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        return signOut(auth);
    }

    return(
        <AuthContext.Provider value={{user,signUp,logIn,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext);
}