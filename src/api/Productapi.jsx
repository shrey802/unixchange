/* eslint-disable no-unused-vars */
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import {ref, uploadString, getDownloadURL} from 'firebase/storage'
import { storage } from '../firebaseConfig';
// WE ARE TAKING SELECTORS CHECKBOXES TEXT NUMBERS IMAGES [ARRAY] AS INPUT AND CREATING AN OBJECT AND STORING THAT
// OBJECT IN FIRESTORE AND WE WILL READ THAT OBJECT TO DISPLAY PRODUCT IN CARD
export const AddUsersProduct = async (name, description, price, quantity, condition, category, tag, images) => {
    try {

        const storageRef = ref(storage, 'product-images');

        const imageURLs = await Promise.all(
          images.map((image) => {
            const imageRef = ref(storageRef, `${uuidv4()}.jpg`);
            return uploadString(imageRef, image, 'data_url')
              .then(() => getDownloadURL(imageRef))
              .catch((error) => {
                throw new Error(`Error uploading image: ${error.message}`);
              });
          })
        );
        
        const productRef = collection(db, 'products');
        const productID = uuidv4();
        const userID = localStorage.getItem('userID');
        const product = {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            condition: condition,
            category: category,
            tag: tag,
            productID: productID,
            userID: userID,
            images: imageURLs
        }
        await addDoc(productRef, product);

    } catch (error) {
        console.log(error);
    }

}

// API TO GET ALL PRODUCTS IN PRODUCTS COLLECTION 
export const GetAllProducts = async() => {
  const prodRef = collection(db, 'products');
  const snapshotofDocs = await getDocs(prodRef);
  const allDocs = snapshotofDocs.docs.map((doc) => doc.data());
  return allDocs;
}

// API TO GET SPECIFIC PRODUCTS USING USERID PROVIDED
export const GetUserProducts = async(userID) => {
  const prodRef = collection(db, 'products');
  const q = query(prodRef, where('userID', '==', userID));
  const querySnapshot = await getDocs(q);
  const myproducts = querySnapshot.docs.map((doc) => doc.data());
  return myproducts;
}