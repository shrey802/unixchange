/* eslint-disable no-unused-vars */
import { db, app} from '../firebaseConfig';
import { updateDoc, collection, query, where, getDocs, doc} from "firebase/firestore"; 
export const MaketheuserAseller = async (sellerdata, userID) => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('userID', '==', userID));
    const querySnapshot = await getDocs(q);
    // log if the document is empty
    if (querySnapshot.empty) {
        throw new Error('User not found');
    }
    let docSnap = querySnapshot.docs[0];
    const docRef = doc(db, 'users', docSnap.id);
    const payload = {
        ...sellerdata,
        isSeller: true
    }
    await updateDoc(docRef, payload);
}

export const Sellerfind = async (userID) => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('userID', '==', userID));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
        return false;
    }
    let docSnap = querySnapshot.docs[0];
    const userData = docSnap.data();

  // Return the isSeller property, or false if not found
  return userData.isSeller || false;
}