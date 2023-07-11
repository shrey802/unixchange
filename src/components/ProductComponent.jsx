/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import ProductDisplay from '../components/common/ProductDisplay'
import ProductDashboard from '../components/common/ProductDashboard'
import { GetAllProducts } from '../api/Productapi'
export default function ProductComponent() {
  const[productData, setproductData] = useState([]);
  useEffect(() => {
    const fetchProductsfunc = async () => {
        try {
          const allproducts = await GetAllProducts();
          setproductData(allproducts);
        } catch (error) {
          console.log(error);
        }
    };
    fetchProductsfunc();
  }, [productData]);
  return (
    <div>
      <ProductDashboard/>
      <ProductDisplay products={productData}/>
    </div>
    
  )
}
