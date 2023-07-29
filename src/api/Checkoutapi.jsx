/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify';
import { db, app } from '../firebaseConfig';
import { collection, addDoc, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { database } from '../firebaseConfig';
import { ref, child, get } from 'firebase/database';

// CREATE ORDER IN FIRESTORE COLLECTION
export const createOrder = async (address, buyerID, productID) => {
    const productkaData = await getProductFromCart(buyerID, productID);
    
    try {
        const orderID = uuidv4();
        const orderCollection = collection(db, 'orders');
        const orderpayload = {
            orderID: orderID,
            buyerID: buyerID,
            address: address,
            productkaData: productkaData,
            paymentstatus: 'unpaid'
        }
        await addDoc(orderCollection, orderpayload);
        return orderID;
    } catch (error) {
        toast.error('Error creating order');
        throw new Error;
    }
}

// FIND THE PARTICULAR PRODUCT FROM CART FOR CHECKOUT AND ORDER COLLECTION PURPOSES
export const getProductFromCart = async (buyerID, productID) => {
  try {
    const cartRef = ref(database, 'cart');
    const cartSnapshot = await get(cartRef);
    
    let productkaData = {};
    cartSnapshot.forEach((itemincart) => {
      const cartItem = itemincart.val();
      
      if (cartItem.buyerID === buyerID && cartItem.productData.productID === productID) {
        productkaData = cartItem.productData;
      }
    });
   
    if (productkaData) {
      return productkaData;
    } else {
      throw new Error('Product not found in the cart');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

