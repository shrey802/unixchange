/* eslint-disable no-unused-vars */
import { db } from '../firebaseConfig';
import { app } from '../firebaseConfig'
import { collection, addDoc, getDocs, query, where, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadString, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebaseConfig';
import { toast } from 'react-toastify';
// WE ARE TAKING SELECTORS CHECKBOXES TEXT NUMBERS IMAGES [ARRAY] AS INPUT AND CREATING AN OBJECT AND STORING THAT
// OBJECT IN FIRESTORE AND WE WILL READ THAT OBJECT TO DISPLAY PRODUCT IN CARD
export const AddUsersProduct = async (name, description, price, condition, category, tag, images) => {
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
export const GetAllProducts = async () => {
  const prodRef = collection(db, 'products');
  const snapshotofDocs = await getDocs(prodRef);
  const allDocs = snapshotofDocs.docs.map((doc) => doc.data());
  return allDocs;
}

// API TO GET SPECIFIC PRODUCTS USING USERID PROVIDED
export const GetUserProducts = async (userID) => {
  const prodRef = collection(db, 'products');
  const q = query(prodRef, where('userID', '==', userID));
  const querySnapshot = await getDocs(q);
  const myproducts = querySnapshot.docs.map((doc) => doc.data());
  return myproducts;
}

// API TO GET SPECIFIC PRODUCT USING PRODUCTID FOR UPDATING THE PRODUCTS
export const GetProductByProductId = async (productID) => {
  const prodRef = collection(db, 'products');
  const q = query(prodRef, where('productID', '==', productID));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const specificProduct = querySnapshot.docs[0].data();
    return specificProduct;
  } else {
    throw new Error('Product not found');
  }
};

// API TO UPDATE A SPECIFIC PRODUCT USING PRODUCT ID  
export const UpdateProductByProductId = async (productID, updatedDoc) => {
  const prodRef = collection(db, 'products');
  const q = query(prodRef, where('productID', '==', productID));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const docRef = doc(db, 'products', querySnapshot.docs[0].id);
    await updateDoc(docRef, updatedDoc);
  } else {
    throw new Error('Product not updated');
  }
}


// API TO DELETE A SPECIFIC PRODUCT USING PRODUCT ID
export const DeleteProduct = async (productID) => {
  try {
    const prodRef = collection(db, 'products');
    const q = query(prodRef, where('productID', '==', productID));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      await deleteDoc(docSnapshot.ref);
      console.log('Product deleted successfully');
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    console.log('Error deleting product:', error);
    throw new Error('Failed to delete product');
  }
};



export const GetCategories = async () => {
  try {
    const db = app.firestore();
    const snapshot = await db.collection('products').get();
    const categories = new Set();
    snapshot.forEach((doc) => {
      const product = doc.data();
      if (product.category) {
        categories.add(product.category);
      }
    });
    return Array.from(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};


export const GetProductforCart = async (productID) => {
  try {
    const prodRef = collection(db, 'products');
    const q = query(prodRef, where('productID', '==', productID));
    const querySnapshot = await getDocs(q);
    if(!querySnapshot.isEmpty){
      const specificProduct = querySnapshot.docs[0].data();
      return specificProduct;
    }else{
      toast('Product not found')
    }
  } catch (error) {
    toast.error(error);
  }
}
