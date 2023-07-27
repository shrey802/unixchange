/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ProductDisplay from '../components/common/ProductDisplay';
import ProductDashboard from '../components/common/ProductDashboard';
import { GetAllProducts, GetCategories } from '../api/Productapi';
import './css/search&category.css'
import {Sellerfind} from '../api/SellerAPI'
export default function ProductComponent() {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [seller, setseller] = useState(false);
// HAS EVERYTHING RELATED TO CATEGORIES AND SEARCH
const userID = localStorage.getItem('userID');

useEffect(() => {
  const fetchSeller = async () => {
    try {
      const seller = await Sellerfind(userID);
      setseller(seller);
    }catch(error){
      console.log(error);
    }
  }
  fetchSeller();
}, [userID]);


// FETCH ALL PRODUCTS
  useEffect(() => {
    const fetchProductsFunc = async () => {
      try {
        const allProducts = await GetAllProducts();
        setProductData(allProducts);
      } catch (error) {
        console.log(error);
      }
    };
// FETCH ALL CATEGORIES
    const fetchCategoriesFunc = async () => {
      try {
        const categories = await GetCategories();
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductsFunc();
    fetchCategoriesFunc();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter products based on searchQuery and selectedCategory
  const filteredProducts = productData.filter((product) => {
    const productName = product.name.toLowerCase();
    const categoryName = product.category.toLowerCase();
    const searchFilter = productName.includes(searchQuery.toLowerCase());
    const categoryFilter =
      selectedCategory === '' || categoryName === selectedCategory.toLowerCase();
    return searchFilter && categoryFilter;
  });

  return (
    <div>
      <ProductDashboard isSeller={seller}/>
      <div className="container mt-3">
        <div className="row justify-content-center mb-3">
          <div className="col-md-6 col-sm-12 mb-3 mr-3 ml-3 mt-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="form-control searchBar"
            />
          </div>
          <div className="col-md-6 col-sm-12 mb-3">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="form-control categoryBar"
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home &amp; Kitchen</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="fitness">Fitness</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ProductDisplay products={filteredProducts} />
      </div>
    </div>
  );
}