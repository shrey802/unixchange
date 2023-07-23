/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { GetProductByProductId } from "../../api/Productapi";
import { toast } from 'react-toastify';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './individualProduct.css';

export default function ProductDetail() {
  const [indiproduct, setindiproduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
// DISPLAY INDIVIDUAL PRODUCT DETAILS
  useEffect(() => {
    const productID = localStorage.getItem("productID");
    if (productID) {
      fetchAllproduct(productID);
    } else {
      toast.error("Product not found")
    }
  }, []);

  function handleBackToProducts() {
    localStorage.removeItem("productID");
    window.location.href = "/products";
  }

  const fetchAllproduct = async (productID) => {
    try {
      const individualProduct = await GetProductByProductId(productID);
      setindiproduct(individualProduct);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Object.keys(indiproduct).length) {
    return <div>Product not found.</div>;
  }
// DISPLAYS IN STYLE
  return (
    <div className="indiproductContainer">
      <h2>{indiproduct.name.toUpperCase()}</h2>
      <div className="indiproductImagesContainer">
        <Carousel showThumbs={false} showStatus={false}>
          {indiproduct.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Product ${indiproduct.id}`} className="indiproductImage" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="indiproductDetails">
        <p>{indiproduct.description}</p>
        <p>Cost of each piece is <span>₹{indiproduct.price}</span></p>
        
        <p>Condition: {indiproduct.condition}</p> <br/>
        <div className="indiproductCategoryTagContainer">
          <p className="indiproductCategory">{indiproduct.category}</p>
          <p className="indiproductTag">{indiproduct.tag}</p>
        </div>
        {/* Add more product details here */}
      </div>
      <button className="indiproductBackToProductsButton" onClick={() => handleBackToProducts()}>Back to Products</button>
    </div>
  );
}
