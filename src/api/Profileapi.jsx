/* eslint-disable no-unused-vars */
import {db, storage} from '../firebaseConfig';
import { updateDoc, collection, query, where, getDocs, doc} from "firebase/firestore"; 
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'

// BELOW FUNCTION IS TO UPDATE THE DOCUMENT WITH ALL THE DATA (NAME, MOTTO, AGE, IMAGE)

export const UserEdited = async (userID, fullname, age, motto, picture) => {

    const storageRef = ref(storage, `userprofilepicture/${userID}`);
    let downloadedURL = '';
    try {
        await uploadBytes(storageRef, picture);
        const downloadURL = await getDownloadURL(storageRef);
        
        downloadedURL = downloadURL;
        
      } catch (error) {
        console.log('Upload error:', error);
    }


    // we get the collection to query from
    const userCollection = collection(db, 'users');
    // check the userID and traverse through each document with same userID
    const q = query(userCollection, where('userID', '==', userID));
    // assuming there are multiple documents so we get all documents that match with the ID
    const querySnapshot = await getDocs(q);
    // log if the document is empty
    if (querySnapshot.empty) {
        throw new Error('User not found');
    }
    // get the first document 
    let docSnap = querySnapshot.docs[0];
    // get the document ID not the userID
    const userRef = doc(db, 'users', docSnap.id);
// create object for updating data 
  const payload = {
    fullname: fullname,
    age: age,
    motto: motto,
    profilepicture: downloadedURL
  };
// pass the document ID and data and it updates it
  await updateDoc(userRef, payload);
  
  
}


// BELOW FUNCTION IS TO SEND THE DATA AS OBJECT AND PASSED TO ProfileComponent TO RENDER 

export const DisplayDataonDiv = async (userID) => {
  const userCollection = collection(db, 'users');
  // check the userID and traverse through each document with same userID
  const q = query(userCollection, where('userID', '==', userID));
  // assuming there are multiple documents so we get all documents that match with the ID
  const querySnapshot = await getDocs(q);
  // log if the document is empty
  if (querySnapshot.empty) {
      throw new Error('User not found');
  }
  let docSnap = querySnapshot.docs[0];
  const userData = docSnap.data();
  return {
    motto: userData.motto,
    fullname: userData.fullname,
    age: userData.age,
    profilepicture: userData.profilepicture
  }
}


