/* eslint-disable no-unused-vars */
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import { auth } from '../firebaseConfig.js';

export const SignUp = async(email, password) => {
    try {
         let response = await createUserWithEmailAndPassword(auth, email, password);
         return response;
       
    } catch (error) {
        return error;
    }
}

export const GoogleSignUp = async(email, password) => {
    try {
        let userCreatedbyGoogle = await signInWithPopup(auth, new GoogleAuthProvider());
        return userCreatedbyGoogle;
    } catch (error) {
        return error;
    }
}

export const Login = async(email, password) => {
    try {
        let loginResponse = await signInWithEmailAndPassword(auth, email, password);
        return loginResponse;
    } catch (error) {
        return error;
    }
}


export const Logout = () => {
    
    try {
        signOut(auth);
    } catch (error) {
        return error;
    }
}