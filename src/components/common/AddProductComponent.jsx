/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../common/addproduct.css';
import { AddUsersProduct } from '../../api/Productapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// THIS IS FORM TO ADD PRODUCTS TO FIRESTORE
export default function AddProductComponent() {
  const [productimages, setproductimages] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    condition: '',
    category: '',
    tag: 'unsold',
    images: [],
  });
  const navigate = useNavigate();
// ADDING PRODUCTS
  const handlingProductAPI = async () => {
    try {
      await AddUsersProduct(
        productData.name,
        productData.description,
        productData.price,
        productData.condition,
        productData.category,
        productData.tag,
        productimages
      );
      toast.success('Your product has been added successfully.');
      setProductData({
        name: '',
        description: '',
        price: '',
        condition: '',
        category: '',
        tag: '',
        images: []
      });
      setTimeout(() => {
        toast('You are being navigated, please wait for a few seconds.');
        navigate('/products');
      }, 6000);
    } catch (error) {
      toast.error(error);
    }
  };
// STORES ALL THE IMAGES IN STORAGE
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageArray = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        imageArray.push(reader.result);
      };
    });

    setproductimages(imageArray);
  };
// FOR CHECKBOXES AND OPTIONS & TO EASE THE STRUCTURING OF PRODUCT SCHEMA
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setProductData((prevState) => ({
        ...prevState,
        [name]: checked ? value : '',
      }));
    } else {
      setProductData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
// PRODUCT FORM 
  return (
    <div className='add-your-product-form'>
      <h2 className='product-heading'>Add your product data here</h2>

      <div className='form-row'>
        <label htmlFor='name'>Product Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={productData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className='form-row'>
        <label htmlFor='description'>Product Description (up to 20-25 words)</label>
        <textarea
          id='description'
          name='description'
          value={productData.description}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className='form-row'>
        <label htmlFor='price'>Product Price (in ₹)</label>
        <input
          type='number'
          id='price'
          name='price'
          value={productData.price}
          onChange={handleInputChange}
          required
        />
      </div>


      <div className='form-row'>
        <label>Product Condition</label>
        <div className='checkbox-group'>
          <label>
            <input
              type='checkbox'
              name='condition'
              value='new'
              checked={productData.condition === 'new'}
              onChange={handleInputChange}
            />
            New
          </label>
          <label>
            <input
              type='checkbox'
              name='condition'
              value='used'
              checked={productData.condition === 'used'}
              onChange={handleInputChange}
            />
            Used
          </label>
        </div>
      </div>

      <div className='form-row'>
        <label htmlFor='category'>Category</label>
        <select
          id='category'
          name='category'
          value={productData.category}
          onChange={handleInputChange}
          required
        >
          <option value=''>Select a category</option>
          <option value='electronics'>Electronics</option>
          <option value='clothing'>Clothing</option>
          <option value='home'>Home &amp; Kitchen</option>
          <option value='finance'>Finance</option>
          <option value='education'>Education</option>
          <option value='fitness'>Fitness</option>
        </select>
      </div>

      <div className='form-row'>
        <label>Sold?</label>
        <div className='checkbox-group'>
          <label>
            <input
              type='checkbox'
              name='tag'
              value='unsold'
              checked={productData.tag === 'unsold'}
              onChange={handleInputChange}
            />
            Unsold
          </label>
        </div>
      </div>

      <div className='form-row'>
        <label htmlFor='images'>Product Images</label>
        <input type='file' id='images' name='pictures' multiple onChange={handleImageChange} required />
      </div>

      <div className='form-row'>
        <button type='submit' className='submit-button' onClick={handlingProductAPI}>
          Add Product
        </button>
      </div>
    </div>
  );
}
