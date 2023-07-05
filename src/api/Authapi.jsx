/* eslint-disable no-unused-vars */
import {
    signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged
} from 'firebase/auth';

import { auth, db} from '../firebaseConfig';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

// LISTENS FOR YOUR AUTH STATES (SIGNUP, LOGOUT, LOGIN)
onAuthStateChanged(auth, (user) => {
    if(user){
        console.log('user is logged in');
    }else{
        console.log('user is not logged in');
    }
})

export const SignUp = async (email, password) => {
    try {

        let response = await createUserWithEmailAndPassword(auth, email, password);
        const userID = uuidv4();
        const userCollection = collection(db, 'users');
        const userData = {
            userID: userID,
            email: email,
        }
        await addDoc(userCollection, userData);
        return {
            // response: response,
            userID: userID,
            email: email,
        }
    }
    catch (err) {
        return err;
    }
}


const getUserID = async (email) => {
    try {
        const userCollection = collection(db, 'users');
        const q = query(userCollection, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            throw new Error('User not found');
        }
        let docSnap = querySnapshot.docs[0];
        let {userDoc, userID} = docSnap.data();
       
        return userID;
    } catch (error) {
        console.log(error);
    }
}

export const Login = async (email, password) => {
    try {
       
        let response = await signInWithEmailAndPassword(auth, email, password);
        const userID = await getUserID(email);
        localStorage.setItem('userID', userID);
        return response;
    }
    catch (err) {
        return err;
    }
}



export const Logout = () => {

    try {
        signOut(auth);
        localStorage.removeItem('userID');
    } catch (error) {
        return error;
    }
}

