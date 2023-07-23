/* eslint-disable no-unused-vars */
import { database } from '../firebaseConfig';
import { toast } from 'react-toastify'
import { ref, push, get, update, remove, child } from "firebase/database";
const databseRef = ref(database);

// ADDING TO CART COLLECTION IN REALTIME DB
export const AddingtoRealtimeCart = async (product, buyerID) => {
    try {
        const cartRef = child(databseRef, 'cart');
        await push(cartRef, {
            buyerID: buyerID,
            productData: product,
            quantity: 1
        });
        toast.success('Product added to cart successfully');
    } catch (error) {
        toast.error(error);
    }
}

// GETTING ALL THE PRODUCTS OF A PARTICULAR USER
export const GetCartItems = async (buyerID) => {
    try {
        const cartRef = child(databseRef, 'cart');
        const querySnapshot = await get(cartRef);
        const cartProductsArray = [];
        querySnapshot.forEach((childSnapshot) => {
            const cartItem = childSnapshot.val();
            if (cartItem.buyerID === buyerID) {
                cartProductsArray.push(cartItem);
            }
        });
        return cartProductsArray;
    } catch (error) {
        toast.error(error);
    }
}

// DELETING A PRODUCT FROM CART
export const DeleteCartItem = async (productID) => {
    try {
        const cartRef = child(databseRef, 'cart');
        const querySnapshot = await get(cartRef);
        querySnapshot.forEach((childSnapshot) => {
            const cartItem = childSnapshot.val();
            if (cartItem.productData.productID === productID) {
                remove(childSnapshot.ref);
                toast.success('Product deleted successfully');
            }
        })
    } catch (error) {
        toast.error(error);
    }
}

// UPDATING QUANTITY OF A PRODUCT
export const UpdateQuantityofProduct = async (productID, newQuantity) => {
    try {
        const cartRef = child(databseRef, 'cart');
        const querySnapshot = await get(cartRef);
        querySnapshot.forEach((childSnapshot) => {
            const cartItem = childSnapshot.val();
            if (cartItem.productData.productID === productID) {
                update(childSnapshot.ref, { quantity: newQuantity });
            }
        });
    } catch (error) {
        toast.error(error);
    }
}