/* eslint-disable no-unused-vars */
import { collection, addDoc, Timestamp} from "firebase/firestore"; 
import {db} from '../firebaseConfig';

export const getQuery = async (querymail, query) => {
    const queryRef = collection(db, "queries");
    const userquery = {
        querymail: querymail,
        query: query,
        timestamp: Timestamp.now(),
    }
    await addDoc(queryRef, userquery);
}
