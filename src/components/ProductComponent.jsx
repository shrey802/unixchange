/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ProductDisplay from '../components/common/ProductDisplay';
import ProductDashboard from '../components/common/ProductDashboard';
import { GetAllProducts, GetCategories } from '../api/Productapi';
import './css/search&category.css'
export default function ProductComponent() {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProductsFunc = async () => {
      try {
        const allProducts = await GetAllProducts();
        setProductData(allProducts);
      } catch (error) {
        console.log(error);
      }
    };

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

  // Function to handle search input change
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
      <ProductDashboard />
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="searchBar"
        />
        <select value={selectedCategory} onChange={handleCategoryChange} className="categoryBar">
          <option value=''>Select a category</option>
        <option value='electronics'>Electronics</option>
          <option value='clothing'>Clothing</option>
          <option value='home'>Home &amp; Kitchen</option>
          <option value='finance'>Finance</option>
          <option value='education'>Education</option>
          <option value='fitness'>Fitness</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <ProductDisplay products={filteredProducts} />
      </div>
    </div>
  );
}
